import React, { Component } from 'react';
import SWAPIService from '../../services/swapi-service';
import './random-planet.css';
import Loader from '../loader/';
import PlanetView from './planet-view';

export default class RandomPlanet extends Component {
    state = {
        planet: {},
        loading: true,
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

        this.setState({
            planet: {
                id,
                name,
                population,
                rotation_period,
                diameter
            },
            loading: false,
        });
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25) + 2;
        this.swapi.getPlanet(id)
        .then(this.onDataLoaded);
    };

    render() {
        const { planet, loading } = this.state;
        const loader = loading ? <Loader/> : null;
        const content = loading ? null : <PlanetView planet={ this.state.planet }/>;

        return (
            <div className="random-planet jumbotron rounded">
                { loader }
                { content }
            </div>
        );
    };
};