import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
    constructor() {
        super();
        
        this.state = {
            label: '',
        };

        this.onLabelChange = (e) => {
            const target = e.target;
            this.setState(( { label } ) => {       
                return {
                    label: target.value,
                };
            });
        };

        this.onSubmit = (e) => {
            e.preventDefault();
            const { onItemAdded } = this.props;
            onItemAdded( this.state['label'] );
            this.setState(( { label } ) => {       
                return {
                    label: '',
                };
            });

        };
    }
    render() {

        return (
            <form className='item-add-form' onSubmit={ this.onSubmit }>
                <input type="text"
                       autoComplete="off"
                       placeholder="Type new item label here"
                       className="form-control item-add-form-name"
                       onChange={ this.onLabelChange }
                       value={ this.state['label'] } />
                <button type="submit"
                        className="btn btn-sm btn-outline-secondary item-add-form-button" >Add Item</button>
            </form>
        );
    }
};