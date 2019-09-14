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
    constructor() {
        super();
    }

    render() {
        const swapi = new SWAPIService();
        swapi.getPerson(10).then(person => {
            console.log(person['name']);
        });
        return (
            <div>
                <Header/>
                <RandomPlanet/>

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemsList/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails/>
                    </div>
                </div>
            </div>
        );
    };
};