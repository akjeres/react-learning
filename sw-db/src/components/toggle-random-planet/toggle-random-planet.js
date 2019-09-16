import React, { Component } from 'react';
import './toggle-random-planet.css';

export default class ToggleRandomPlanet extends Component {
    
    constructor(props) {
        super();
        this.clicHandler = props.togglePlanet;
    }

    render() {
        return (
            <div className='toggle-random-planet'>
                <button className='btn btn-warning'
                    onClick={ this.clicHandler }>
                        Toggle Random Planet
                </button>
            </div>
        );
    };
}