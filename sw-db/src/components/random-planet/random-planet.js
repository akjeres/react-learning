import React, { Component } from 'react';
import './random-planet.css';

export default class RandomPlanet extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="random-planet jumbotron rounded">
                <img className="planet-image"
                     src="https://starwars-visualguide.com/assets/img/planets/9.jpg"
                     alt="Coruscant"/>
                <div>
                    <h4>Coruscant</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population</span>
                            <span>1,000,000,000,000</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation Period</span>
                            <span>24 days</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter</span>
                            <span>12,240km</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    };
};