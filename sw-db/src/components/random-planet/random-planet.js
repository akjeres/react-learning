import React, { Component } from 'react';
import SWAPIService from '../../services/swapi-service';
import './random-planet.css';

export default class RandomPlanet extends Component {
    state = {
        id: null,
        name: null,
        population: null,
        rotation_period: null,
        diameter: null,
    };

    constructor() {
        super();

        this.swapiService = new SWAPIService();

        this.updatePlanet();
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25) + 2;
        this.swapiService.getPlanet(id)
        .then((planet) => {
            const { name, population, rotation_period, diameter } = planet;
            this.setState({
                id: id,
                name: name,
                population: population,
                rotation_period: rotation_period,
                diameter: diameter,
            });
        });
    };

    render() {
        const {
            id,
            name,
            population,
            rotation_period,
            diameter,
        } = this.state;

        return (
            <div className="random-planet jumbotron rounded">
                <img className="planet-image"
                     src={`https://starwars-visualguide.com/assets/img/planets/${ id }.jpg`}
                     alt="Coruscant"/>
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