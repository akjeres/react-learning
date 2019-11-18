import React, { Component } from 'react';
import './page.css';
import ItemsList from '../items-list/';
import ItemDetails from '../item-details/';
import ErrorIndicator from '../error-indicator/';
import ErrorBoundry from '../error-boundry/';
import Row from '../row/';

import SWAPIService from '../../services/swapi-service';

export default class Page extends Component{
    state = {
        selectedItem: null,
    }

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
                {(i) => (`${i.name} (${i.birth_year})`)}
            </ItemsList>
        );
        const personDetails = (
            <ErrorBoundry>
                <ItemDetails 
                    itemID={ this.state.selectedItem } 
                    path={ path } 
                    getData={ this.swapi.getSingle }/>
            </ErrorBoundry>
        );

        return (
            <Row left={ itemList }
                right={ personDetails }/>
        );
    }
};