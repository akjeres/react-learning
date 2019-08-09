import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const rootElement = document.getElementById('root');
const App = () => {

    const todoData = [
        { label: "Learn JavaScript", important: false, id: 0, },
        { label: "Learn ReactJS", important: true, id: 1, },
        { label: "Build ReactJS App", important: true, id: 2, },
        { label: "Profit!", important: false, id: 3, },
    ];

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos={ todoData } />
        </div>
    );
};

ReactDOM.render(<App />, rootElement);