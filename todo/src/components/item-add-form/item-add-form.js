import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
    constructor() {
        super();
    }

    render() {
        const { onItemAdded } = this.props;

        return (
            <div className='item-add-form'>
                <button type="button"
                        className="btn btn-sm btn-outline-secondary item-add-form-button"
                        onClick={ onItemAdded }>Add Item</button>
            </div>
        );
    }
};