import React, { Component } from 'react';
import './page.css';
import ItemsList from '../items-list/';
import PersonDetails from '../person-details/';
import ErrorIndicator from '../error-indicator/';
import SWAPIService from '../../services/swapi-service';

export default class Page extends Component{
    state = {
        selectedItem: null,
        hasError: false,
    }

    swapi = new SWAPIService();

    onSelectItem = (id) => {
        this.setState({
            selectedItem: id,
        });
    };

    componentDidCatch(error, info) {
        console.log('componentDidCatch');
        console.log('error: ', error);
        console.log('info: ', info);
        this.setState({
            hasError: true,
        });
    };

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>;
        }
        const path = this.props.apiPath;
        return(
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemsList 
                        onItemSelected={ this.onSelectItem }
                        getData={ this.swapi.getList }
                        pathName={ path } />
                </div>
                <div className="col-md-6">
                    <PersonDetails  personID={ this.state.selectedItem }/>
                </div>
            </div>
        );
    }
};