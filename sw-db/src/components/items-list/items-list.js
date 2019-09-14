import React, { Component } from 'react';
import './items-list.css';

export default class ItemsList extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <ul className="items-list list-group">
                <li className="list-group-item">
                    Luke Skywalker
                </li>
                <li className="list-group-item">
                    Obi-Wan Kenobi
                </li>
                <li className="list-group-item">
                    Darth Wader
                </li>
                <li className="list-group-item">
                    C-3PO
                </li>
            </ul>
        );
    };
};