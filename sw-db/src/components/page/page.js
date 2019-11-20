import React, { Component } from 'react';
import './page.css';
import ItemsList from '../items-list/';
import ItemDetails, { Record } from '../item-details/';
import {
    List,
    PlanetsDetails,
    StarshipsDetails,
    PeopleList,
} from '../sw-components/';
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
            <List pathName={path} onItemSelected={ this.onSelectItem }>
                { i => i.name }
            </List>
        );
        const itemDetails = (
            <ErrorBoundry>
                <PlanetsDetails id={ this.state.selectedItem } />
            </ErrorBoundry>
        );
        return (
            <React.Fragment>
                <Row left={ itemList }
                    right={ itemDetails }/>
            </React.Fragment>
        );
    }
};