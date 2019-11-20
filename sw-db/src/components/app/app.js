import React, { Component } from 'react';
import './app.css';
import Header from '../header/';
import RandomPlanet from '../random-planet/';
import Page from '../page/';
import ToggleRandomPlanet from '../toggle-random-planet/';
import ErrorButton from '../error-button/';
import SWAPIService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';

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

    toggleRandomPlanetView(e) {
        const showRandomPlanetFlag = e;
        this.setState(({ showRandomPlanet }) => {
            return {
                showRandomPlanet: !showRandomPlanetFlag,
            }
        });
    }

    render() {
        const randomPlanetData = this.state.showRandomPlanet ? <RandomPlanet/> : null;

        return (
            <ErrorBoundry>
                <div className="container app">
                    <Header/>
                    { randomPlanetData }
                    <div className="row mb2 button-row">
                        <ToggleRandomPlanet toggleRandomPlanet={ () => this.toggleRandomPlanetView(this.state.showRandomPlanet) }/>
                        <ErrorButton />
                    </div>
                    <Page
                        apiPath={'planets'} />
                </div>
            </ErrorBoundry>
        );
    };
};