import React, { Component } from 'react';
import './page.css';
import ItemsList from '../items-list/';
import ItemDetails, { Record } from '../item-details/';
import ErrorIndicator from '../error-indicator/';
import ErrorBoundry from '../error-boundry/';
import Row from '../row/';

import SWAPIService from '../../services/swapi-service';

export default class Page extends Component{
    state = {
        selectedItem: null,
    };

    swapi = new SWAPIService();

    onSelectItem = (id) => {
        this.setState({
            selectedItem: id,
        });
    };

    render() {
        const path = this.props.apiPath;
        const itemList = (
            <ItemsList 
                        onItemSelected={ this.onSelectItem }
                        getData={ this.swapi.getList }
                        pathName={ path }>
                { i => i.name }
            </ItemsList>
        );
        const itemDetails = (
            <ErrorBoundry>
                <ItemDetails 
                    itemID={ this.state.selectedItem } 
                    path={ path } 
                    getData={ this.swapi.getSingle }>
                    <Record label="Gender" field="gender" />
                    <Record label="Eye color" field="eye_color" />
                    <Record label="Birth Year" field="birth_year" />
                </ItemDetails>
            </ErrorBoundry>
        );

        return (
            <Row left={ itemList }
                right={ itemDetails }/>
        );
    }
};