import React, { Component } from 'react';
import SWAPIService from '../../services/swapi-service';
import './random-planet.css';

export default class RandomPlanet extends Component {
    state = {
        id: null,
        name: null,
        population: null,
        rotationPeriod: null,
        diameter: null,
    };

    swapi = new SWAPIService();

    constructor() {
        super();
        this.updatePlanet();
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25) + 2;
        this.swapi.getPlanet(id)
        .then((planet) => {
            const { id, name, population, rotationPeriod, diameter } = planet;
            console.log(planet);
            this.setState({
                id, name, population, rotationPeriod, diameter
            });
        });
    };

    render() {
        const {
            id,
            name,
            population,
            rotationPeriod,
            diameter,
        } = this.state;

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
                            <span>{ rotationPeriod } days</span>
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