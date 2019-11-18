import React, { Component } from 'react';
import './item-details.css';
import Loader from '../loader';
import ItemView from './item-view';
import SWAPIService from '../../services/swapi-service';

export default class ItemDetails extends Component {
    state = {
        item: null,
        loading: true,
        path: 'people',
    };

    swapi = new SWAPIService();

    updateDetails() {
        const { itemID, path, getData } = this.props;

        if (!itemID)  return;
        
        this.setState({
            loading: true,
        });

        getData(path, itemID)
            .then((item) => {
                this.setState({ 
                    item: item, 
                    path: path,
                    loading: false,
                 });
            });
    };

    componentDidMount() {
        this.updateDetails();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemID !== prevProps.itemID) {
            this.updateDetails();
        }
    }

    render() {        
        
        const { item, path, loading } = this.state;

        if (!item) {
            return (
                <span>Select item from a list</span>
            );
        }
        const loader = loading ? <Loader /> : null;
        const data = loading ? null : <ItemView item={ item } path={ path }/>;
        return (
            <div className="item-details card">
                { loader }
                { data }
            </div>
        );
    };
};