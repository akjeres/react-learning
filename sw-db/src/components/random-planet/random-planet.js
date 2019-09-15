import React, { Component } from 'react';
import SWAPIService from '../../services/swapi-service';
import './random-planet.css';
import Loader from '../loader/';

export default class RandomPlanet extends Component {
    state = {
        planet: {}
    };

    swapi = new SWAPIService();

    constructor() {
        super();
        this.updatePlanet();
    };

    onDataLoaded = (data) => {
        const { id,
            name,
            population,
            rotation_period,
            diameter } = data;

        this.setState({ planet: {
            id,
            name,
            population,
            rotation_period,
            diameter
        }});
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25) + 2;
        this.swapi.getPlanet(id)
        .then(this.onDataLoaded);
    };

    render() {
        const { planet: {
            id,
            name,
            population,
            rotation_period,
            diameter,
        } } = this.state;

        return (
            <div className="random-planet jumbotron rounded">
                <img className="planet-image"
                     src={`https://starwars-visualguide.com/assets/img/planets/${ id }.jpg`}
                     alt={ name }/>
                <div>
                    <h4>{ name }</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population</span>
                            <span>{ population }</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation Period</span>
                            <span>{ rotation_period } days</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter</span>
                            <span>{ diameter } km</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    };
};