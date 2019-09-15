import React, { Component } from 'react';
import SWAPIService from '../../services/swapi-service';
import './random-planet.css';
import Loader from '../loader/';
import PlanetView from './planet-view';
import ErrorIndicator from '../error-indicator/';

export default class RandomPlanet extends Component {
    state = {
        planet: {},
        loading: true,
        error: false,
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
            error: false,
        });
    };

    onError = (err) => {
        console.error(err);
        this.setState({
            loading: false,
            error: true,
        });
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25) + 2;
        this.swapi
            .getPlanet(id)
            .then(this.onDataLoaded)
            .catch(this.onError);
    };

    render() {
        const { planet, loading, error } = this.state;

        const hasData = !(loading || error);

        const errorMessage = error ? <ErrorIndicator/> : null;
        const loader = loading ? <Loader/> : null;
        const content = hasData ? <PlanetView planet={ planet }/> : null;

        return (
            <div className="random-planet jumbotron rounded">
                { loader }
                { errorMessage }
                { content }
            </div>
        );
    };
};