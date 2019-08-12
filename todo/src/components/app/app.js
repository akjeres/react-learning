import React, { Component } from 'react';
import './app.css';
import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import TodoList from '../todo-list/';
import ItemStatusFilter from '../item-status-filter/';

export default class App extends Component {
    constructor() {
        super();

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
                    onDeleted={ this.deleteItem }/>
            </div>
        );
    };
};