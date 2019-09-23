import React, { Component } from 'react';
import './items-list.css';
import Loader from '../loader/';
import ErrorIndicator from '../error-indicator/';
import ErrorButton from '../error-button/';

export default class ItemsList extends Component {

    state = {
        itemList: null,
        hasError: false,
    };

    componentDidMount() {
        const { getData, pathName = 'vehicles' } = this.props;
        getData(pathName)
        .then((response) => {
            console.log(response);
            this.setState({ itemList: response });
        });
    };

    componentDidCatch() {
        this.setState({
            hasError: true,
        });
    }

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
        const { itemList, hasError } = this.state;
        
        if (hasError) {
            return <ErrorIndicator />
        }

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