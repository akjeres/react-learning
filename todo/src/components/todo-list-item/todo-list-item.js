import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {
    
    constructor() {
        super();

        this.state = {
            done: false,
            important: false,
        };
        this.onLabelClick = () => {
            console.log(`Done: ${this.props.label}`);
            console.log('Done ', this.state);
            this.setState((state) => {
                return {
                    done: !state['done'],
                };
            });
        };
        this.onMarkImportant = () => {
            console.log('Important ', this.state);
            this.setState((state) => {
                return {
                    important: !state['important'],
                };
            });
        }
    };

    render() {

        const { label, onDeleted } = this.props;
        const { done, important } = this.state;

        let className = `todo-list-item${ done ? ' done' : '' }${ important ? ' important' : '' }`;

        return (
            <span className={ className }>
                <span
                    className="todo-list-item-label"
                    title={ label }
                    onClick={ this.onLabelClick } >
                    { label }
                </span>
                <button type="button"
                        className="btn btn-outline-danger btn-sm"
                        onClick={ onDeleted }>
                    <i className="fa fa-trash-o" />
                </button>
                <button type="button"
                        className="btn btn-outline-success btn-sm"
                        onClick={ this.onMarkImportant } >
                    <i className="fa fa-exclamation" />
                </button>
            </span>
        );
    };
};