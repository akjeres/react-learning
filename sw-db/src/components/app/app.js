import React, { Component } from 'react';
import './app.css';
import Header from '../header/';
import RandomPlanet from '../random-planet/';
import Page from '../page/';
import FilmDetails from '../film-details/';
import StarshipDetails from '../starship-details/';
import VehicleDetails from '../vehicle-details/';
import SpecieDetails from '../specie-details/';
import PersonDetails from '../person-details/';
import ToggleRandomPlanet from '../toggle-random-planet/';
import ErrorButton from '../error-button/';
import SWAPIService from '../../services/swapi-service';
import Row from '../row/';
import ItemDetails, { Record } from '../item-details/';
import ItemsList from '../items-list/';
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
        const { getSingle } = this.swapi;

        const l = <ItemDetails 
                   itemID={ 11 }
                   path={'people'}
                   getData={getSingle}>
                    <Record label="Gender" field="gender" />
                    <Record label="Eye color" field="eye_color" />
                    <Record label="Birth Year" field="birth_year" />
                  </ItemDetails>;
        const r = <ItemDetails  
                   itemID={ 5 } 
                   path={'starships'}
                   getData={getSingle}>
                    <Record label="Model" field="model" />
                    <Record label="Length" field="length" />
                    <Record label="Cost" field="cost_in_credits" />
                  </ItemDetails>;
        return (
            <ErrorBoundry>
                <div className="container app">
                    <Header/>
                    {/* { randomPlanetData }
                    <div className="row mb2 button-row">
                        <ToggleRandomPlanet toggleRandomPlanet={ () => this.toggleRandomPlanetView(this.state.showRandomPlanet) }/>
                        <ErrorButton />
                    </div> */}
                    <Row left={ l }
                         right={ r }/>
                    {/* <Page 
                        apiPath={'people'} />
                    <Page 
                        apiPath={'planets'} /> */}
                </div>
            </ErrorBoundry>
        );
    };
};