import React, { Component } from 'react';
import './app.css';
import Header from '../header/';
import RandomPlanet from '../random-planet/';
import ItemsList from '../items-list/';
import PersonDetails from '../person-details/';
import FilmDetails from '../film-details/';
import StarshipDetails from '../starship-details/';
import VehicleDetails from '../vehicle-details/';
import SpecieDetails from '../specie-details/';
import PlanetDetails from '../planet-details/';
import SWAPIService from '../../services/swapi-service';

export default class App extends Component {
    state = {
        showRandomPlanet: true,
        selectedItem: null,
    };

    onSelectItem = (id) => {
        this.setState({
            selectedItem: id,
        });
    }

    render() {
        const swapi = new SWAPIService();
        return (
            <div className="container app">
                <Header/>
                <RandomPlanet/>

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemsList 
                            onItemSelected={ this.onSelectItem } />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails  personID={ this.state.selectedItem }/>
                    </div>
                </div>
            </div>
        );
    };
};