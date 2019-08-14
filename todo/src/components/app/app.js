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
    }

    render() {

        const { todoData } = this.state;
        const doneCount = todoData.filter((i) => !!i['done']).length;
        const toDoCount = todoData.length - doneCount;
        console.log('doneCount ', doneCount);

        return (
            <div className="todo-app">
                <AppHeader toDo={ toDoCount } done={ doneCount }/>
                <div className='top-panel d-flex justify-content-between'>
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList 
                    todos={ todoData } 
                    onDeleted={ this.deleteItem }
                    onToggleImportant={ this.toggleImportant }
                    onToggleDone={ this.toggleDone }
                />
                <ItemAddForm 
                    onItemAdded={ () => this.addItem((new Date()).getTime()) } />
            </div>
        );
    };
};