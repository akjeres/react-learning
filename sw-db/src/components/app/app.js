import React, { Component } from 'react';
import './app.css';
import Header from '../header/';
import RandomPlanet from '../random-planet/';
import Page from '../page/';
import FilmDetails from '../film-details/';
import StarshipDetails from '../starship-details/';
import VehicleDetails from '../vehicle-details/';
import SpecieDetails from '../specie-details/';
import PersonDetails from '../person-details/';
import ToggleRandomPlanet from '../toggle-random-planet/';
import ErrorButton from '../error-button/';
import ErrorIndicator from '../error-indicator/';
import SWAPIService from '../../services/swapi-service';
import ItemsList from '../items-list/';

export default class App extends Component {
    state = {
        showRandomPlanet: true,
        hasError: false,
    };

    onSelectItem = (id) => {
        this.setState({
            selectedItem: id,
        });
    };

    swapi = new SWAPIService();

    componentDidCatch() {
        console.log('componentDidCatch');
        this.setState({
            hasError: true,
        });
    };

    toggleRandomPlanetView(e) {
        const showRandomPlanetFlag = e;
        this.setState(({ showRandomPlanet }) => {
            return {
                showRandomPlanet: !showRandomPlanetFlag,
            }
        });
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>;
        }
        const randomPlanetData = this.state.showRandomPlanet ? <RandomPlanet/> : null;
        return (
            <div className="container app">
                <Header/>
                { randomPlanetData }
                <div className="row mb2 button-row">
                    <ToggleRandomPlanet toggleRandomPlanet={ () => this.toggleRandomPlanetView(this.state.showRandomPlanet) }/>
                    <ErrorButton />
                </div>
                <Page 
                    apiPath={'people'} />
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemsList 
                            onItemSelected={ this.onSelectItem }
                            getData={ this.swapi.getList }
                            pathName={ 'planets' } />
                            
                    </div>
                    <div className="col-md-6">
                        <PersonDetails  personID={ this.state.selectedItem }/>
                    </div>
                </div>
            </div>
        );
    };
};