import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {
    
    constructor() {
        super();
        
        this.state = {
            done: false,
        };
        this.onLabelClick = () => {
            console.log(`Done: ${this.props.label}`);
            console.log(this.state);
            this.setState({
                done: !this.state['done'],
            });
        };
    };

    render() {

        const { label, important = false } = this.props;
        const { done } = this.state;

        let className = `todo-list-item${ done ? ' done' : '' }`;

        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal',
        };

        return (
            <span className={ className }>
                <span
                    className="todo-list-item-label"
                    title={ label }
                    style={ style } 
                    onClick={ this.onLabelClick } >
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