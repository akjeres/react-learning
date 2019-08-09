import React from 'react';
import TodoListItem from './todo-list-item';

const TodoList = () => {

    return (
        <ul>
            <li><TodoListItem label="Learn JavaScript" /></li>
            <li><TodoListItem
                label="Learn ReactJS"
                important/></li>
            <li><TodoListItem
                label="Build ReactJS App"
                important /></li>
            <li><TodoListItem label="Profit!" /></li>
        </ul>
    );
};

export default TodoList;