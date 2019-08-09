import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const rootElement = document.getElementById('root');
const App = () => {

    const todoData = [
        { label: "Learn JavaScript", important: false, },
        { label: "Learn ReactJS", important: true, },
        { label: "Build ReactJS App", important: true, },
        { label: "Profit!", important: false, },
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