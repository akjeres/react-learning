import React, { Component } from 'react';
import './item-status-filter.css';
import ItemStatusButton from '../item-status-button';

export default class ItemStatusFilter extends Component {
    constructor( props ) {
        super();

        this.state = {
            doneStatus: props.doneStatus
        };

        this.classNameChange = (item, classItemToRemove, classItemToAdd) => {
            item.classList.remove(classItemToRemove);
            item.classList.add(classItemToAdd);
        };

        this.onDoneSelect = (e) => {
            const target = e.target.closest('button');
            const doneValue = target.getAttribute('data-done');
            const { onFilterStatus } = this.props;
            onFilterStatus(doneValue);
            this.setState(({ doneStatus }) => {
                return ({
                    doneStatus: doneValue,
                });
            });     
        };
    };
    render() {
        return (
            <div
            className="btn-group"
            data-selected = { this.state['doneStatus'] }
            onClick = { this.onDoneSelect }>
                <ItemStatusButton
                    value={ "." }
                    text={ "All" }
                    status={ this.state['doneStatus'] }
                    />
                <ItemStatusButton
                    value={ "false" }
                    text={ "Active" }
                    status={ this.state['doneStatus'] }
                    />
                <ItemStatusButton
                    value={ "true" }
                    text={ "Done" }
                    status={ this.state['doneStatus'] }
                    />
            </div>
        );
    };
};