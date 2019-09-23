import React, { Component } from 'react';
import './toggle-random-planet.css';

export default class ToggleRandomPlanet extends Component {
    
    constructor(props) {
        super();
        this.clicHandler = props.toggleRandomPlanet;
    }

    render() {
        return (
                <button className='btn btn-warning'
                    onClick={ this.clicHandler }>
                        Toggle Random Planet
                </button>
        );
    };
}