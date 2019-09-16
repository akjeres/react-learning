import React, { Component } from 'react';
import './items-list.css';
import SWAPIService from '../../services/swapi-service';
import Loader from '../loader/';

export default class ItemsList extends Component {
    swapi = new SWAPIService();

    state = {
        itemList: null,
    };

    componentDidMount() {
        this.swapi.getAllPeople()
            .then((response) => {
                console.log(response);
                this.setState({ itemList: response });
            });
    };

    renderItems(arr) {
        return arr.map(({ id, name }) => {
            return(
                <li className="list-group-item"
                    key={ id }
                    onClick={ (e) => {
                        this.props.onItemSelected(id);
                    } }
                >
                    { name }
                </li>
            );
        });
    }

    render() {
        const { itemList } = this.state;
        
        if (!itemList) {
            return <Loader />
        }

        const items = this.renderItems(itemList);
        return (
            <ul className="items-list list-group">
                { items }
            </ul>
        );
    };
};