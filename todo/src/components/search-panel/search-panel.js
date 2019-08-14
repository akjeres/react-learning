import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {

    constructor() {
        super();

        this.state = {
            value: '',
        };

        this.onFilterChange = (e) => {
            const inputValue = e.target.value;
            const { onFilter } = this.props;
            onFilter(inputValue);
            this.setState(( { value } ) => {
                return ({
                    value: inputValue,
                });
            });
        };
    }

    render() {

        console.log(this.state);
        return (<input type="text"
            placeholder='Type here to search'
            autoComplete='off'
            tabIndex='1'
            onChange={ this.onFilterChange }
            value={ this.state['value'] }
            className="form-control top-panel-search" />)};
};