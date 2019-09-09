import React, { Component } from 'react';
import './app.css';
import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import TodoList from '../todo-list/';
import ItemStatusFilter from '../item-status-filter/';
import  ItemAddForm from '../item-add-form/';

export default class App extends Component {
    constructor() {
        super();

        this.maxId = 100;

        const createTodoItem = ( { label, important = false, done = false } ) => {
            return ({
                label,
                important,
                done,
                id: this.maxId++,
            })
        }

        this.state = {
            todoData: [
                createTodoItem( { label: "Learn JavaScript" } ),
                createTodoItem( { label: "Learn ReactJS", done: true, important: true, } ),
                createTodoItem( { label: "Build ReactJS App", important: true, } ),
                createTodoItem( { label: "Profit!" } ),
            ],
            doneStatus: 'true',
        };

        this.deleteItem = (id) => {
            this.setState(( { todoData } ) => {                
                return {
                    todoData: todoData.filter((i) => i['id'] !== id),
                };
            });
        };

        this.addItem = ( text ) => {
            console.log('item added ', text);
            this.setState(( { todoData } ) => {
                return {
                    todoData: todoData.concat( createTodoItem( { label: text } ) ),
                };
            });
        }
        
        this.toggleProperty = ( arr, param, id ) => {
            return arr.map( (i) => {
                if (i['id'] === id) {
                    i[param] = !i[param];
                }
                return i;
            } );
        }

        this.toggleImportant = (id) => {
            this.setState(( { todoData } ) => {
                    return ({
                        todoData: this.toggleProperty( todoData, 'important', id ),
                    });
                }
            );
        };

        this.toggleDone = (id) => {
            this.setState(( { todoData } ) => {
                    return ({
                        todoData: this.toggleProperty( todoData, 'done', id ),
                    });
                }
            );
        };

        this.filterElements = (arr, field, value = '') => {
            if (value !== '') return arr.filter((i) => {
                const re = new RegExp(value, 'ig');

                return re.test(i[field]);
            });
            
            return arr;
        };

        this.filterElems = ( value, property ) => {
            this.setState(( { filterValue, propertyToFilter } ) => {
                return {
                    propertyToFilter: property,
                    filterValue: value,
                };
            });
        }

        this.filterByStatus = ( doneStatusFilter ) => {
            this.setState(( { doneStatus } ) => {
                return {
                    doneStatus: doneStatusFilter,
                };
            });
        }
        
    }

    render() {
        const { todoData, doneStatus, filterValue, propertyToFilter } = this.state;
        const doneCount = todoData.filter((i) => !!i['done']).length;
        const toDoCount = todoData.length - doneCount;
        let dataTorender = this.filterElements(this.filterElements(todoData, propertyToFilter, filterValue), 'done', doneStatus);

        return (
            <div className="todo-app">
                <AppHeader toDo={ toDoCount } done={ doneCount }/>
                <div className='top-panel d-flex justify-content-between'>
                    <SearchPanel onFilter={ (filterText) => this.filterElems( filterText, 'label' ) }/>
                    <ItemStatusFilter
                        onFilterStatus={ (value) => this.filterByStatus(value) }
                        doneStatus={ doneStatus }
                    />
                </div>
                <TodoList 
                    todos={ dataTorender } 
                    onDeleted={ this.deleteItem }
                    onToggleImportant={ this.toggleImportant }
                    onToggleDone={ this.toggleDone }
                />
                <ItemAddForm 
                    onItemAdded={ ( labelText ) => this.addItem( labelText ) } />
            </div>
        );
    };
};