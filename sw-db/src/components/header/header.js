import React, { Component } from 'react';
import './header.css';

export default class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="header d-flex">
                <h3>
                    <a href="#">
                        Star Wars DB
                    </a>
                </h3>
                <ul className="d-flex">
                    <li>
                        <a href="">People</a>
                    </li>
                    <li>
                        <a href="">Films</a>
                    </li>
                    <li>
                        <a href="">Starships</a>
                    </li>
                    <li>
                        <a href="">Vehicles</a>
                    </li>
                    <li>
                        <a href="">Species</a>
                    </li>
                    <li>
                        <a href="">Planets</a>
                    </li>
                </ul>
            </div>
        );
    };
};