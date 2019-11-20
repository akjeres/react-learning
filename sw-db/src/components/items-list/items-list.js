import React, { Component } from 'react';
import './items-list.css';
import { withData } from '../hoc-helpers/';
import SWAPIService from '../../services/swapi-service'

const ItemsList = (props) => {
    const { data, onItemSelected, children: renderLabel } = props;
    const _renderItems = (arr) => {
        return arr.map((item) => {
            const { id } = item;
            const label = renderLabel(item);

            return(
                <li className="list-group-item"
                    key={ id }
                    onClick={ (e) => {
                        onItemSelected(id);
                    } }
                >
                    { label }
                </li>
            );
        });
    };

    const items = _renderItems(data);
    return (
        <ul className="items-list list-group">
            { items }
        </ul>
    );
};

const { getList } = new SWAPIService();

export default withData(ItemsList, getList);