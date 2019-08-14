import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {
    
    render() {

        const { 
            label, 
            onDeleted,
            onToggleImportant,
            onToggleDone,
            important,
            done,
         } = this.props;

        let className = `todo-list-item${ done ? ' done' : '' }${ important ? ' important' : '' }`;
        return (
            <span className={ className }>
                <span
                    className="todo-list-item-label"
                    title={ label }
                    onClick={ onToggleDone } >
                    { label }
                </span>
                <button type="button"
                        className="btn btn-outline-danger btn-sm"
                        onClick={ onDeleted }>
                    <i className="fa fa-trash-o" />
                </button>
                <button type="button"
                        className="btn btn-outline-success btn-sm"
                        onClick={ onToggleImportant } >
                    <i className="fa fa-exclamation" />
                </button>
            </span>
        );
    };
};