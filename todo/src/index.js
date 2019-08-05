import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root');
const el = (<div>
    <h1>My Todo List</h1>
    <input type="serach" placeholder="search" autoComplete="off" />
    <ul>
        <li>Learn JavaScript</li>
        <li>Learn React</li>
        <li>Build an App</li>
        <li>Profit!</li>
    </ul>
</div>);

ReactDOM.render(el, rootElement);