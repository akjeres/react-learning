import React, { Component } from 'react';
import './person-details.css';

export default class PersonDetails extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="person-details card">
                <img className="person-image"
                     src="https://starwars-visualguide.com/assets/img/characters/1.jpg"
                     alt="Luke Skywalker"/>
                <div className="card-body">
                    <h4>Luke Skywalker</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>Male</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span>
                            <span>19BBY</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Hair Color</span>
                            <span>Blond</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    };
};