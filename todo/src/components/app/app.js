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

        this.state = {
            todoData: [
                { label: "Learn JavaScript", important: false, id: 0, },
                { label: "Learn ReactJS", important: true, id: 1, },
                { label: "Build ReactJS App", important: true, id: 2, },
                { label: "Profit!", important: false, id: 3, },
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
                    todoData: todoData.concat({
                        label: text,
                        important: false,
                        id: this.maxId++,
                    }),
                };
            });
        }

        this.toggleImportant = (id) => {
            console.log('toggleImportant ', id);
            this.setState(( { todoData } ) => {
                return {
                    todoData: todoData.map((i) => {
                        if (i['id'] === id) {
                            i['important'] = !i['important'];
                        }
                        return i;
                    })
                };
            });
        };

        this.toggleDone = (id) => {
            console.log('toggleDone ', id);
            this.setState(( { todoData } ) => {
                return {
                    todoData: todoData.map((i) => {
                        if (i['id'] === id) {
                            i['done'] = !i['done'];
                        }
                        return i;
                    })
                };
            });
        };
    }

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={ 1 } done={ 3 }/>
                <div className='top-panel d-flex justify-content-between'>
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList 
                    todos={ this.state.todoData } 
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