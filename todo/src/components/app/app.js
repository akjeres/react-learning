import React from 'react';
import './app.css';
import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import TodoList from '../todo-list/';
import ItemStatusFilter from '../item-status-filter/';

const App = () => {

    const todoData = [
        { label: "Learn JavaScript", important: false, id: 0, },
        { label: "Learn ReactJS", important: true, id: 1, },
        { label: "Build ReactJS App", important: true, id: 2, },
        { label: "Profit!", important: false, id: 3, },
    ];

    return (
        <div className="todo-app">
            <AppHeader toDo={ 1 } done={ 3 }/>
            <div className='top-panel d-flex justify-content-between'>
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <TodoList 
                todos={ todoData } 
                onDeleted={ (id) => {
                    console.log('del ', id);
                } }/>
        </div>
    );
};

export default App;