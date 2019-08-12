import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

    
    render() {

        const { label, important = false } = this.props;

        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal',
        }
    
        return (
            <span className="todo-list-item">
                <span
                    className="todo-list-item-label"
                    title={ label }
                    style={ style } >
                    { label }
                </span>
                <button type="button"
                        className="btn btn-outline-danger btn-sm">
                    <i className="fa fa-trash-o" />
                </button>
                <button type="button"
                        className="btn btn-outline-success btn-sm">
                    <i className="fa fa-exclamation" />
                </button>
            </span>
        );
    };
};