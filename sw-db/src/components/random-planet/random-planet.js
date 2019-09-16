import React, { Component } from 'react';
import SWAPIService from '../../services/swapi-service';
import './random-planet.css';
import Loader from '../loader/';
import PlanetView from './planet-view';
import ErrorIndicator from '../error-indicator/';
import ToggleRandomPlanet from '../toggle-random-planet/';

export default class RandomPlanet extends Component {
    state = {
        planet: {},
        loading: true,
        error: false,
    };

    swapi = new SWAPIService();

    componentDidMount() {
        const delay = 100000;
        console.log('Did mount');
        this.updatePlanet();
        this.interval = setInterval(() => {
            this.updatePlanet();
        }, delay);
    };

    componentWillUnmount() {
        console.log('Will unmount');
        clearInterval(this.interval);
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
        this.setState(() => {
            return {
                loading: false,
                error: true,
            }
        });
    };

    updatePlanet = () => {
        console.log('update');
        const id = Math.floor(Math.random() * 25) + 2;
        this.swapi
            .getPlanet(id)
            .then(this.onDataLoaded)
            .catch(this.onError);
    };


    render() {
        console.log('render');
        const { planet, loading, error } = this.state;

        const hasData = !(loading || error);

        const errorMessage = error ? <ErrorIndicator/> : null;
        const loader = loading ? <Loader/> : null;
        const content = hasData ? <PlanetView planet={ planet }/> : null;

        return (
            <div>
                <div className="random-planet jumbotron rounded">
                    { loader }
                    { errorMessage }
                    { content }
                </div>
                <ToggleRandomPlanet togglePlanet={ this.updatePlanet } />
            </div>
        );
    };
};