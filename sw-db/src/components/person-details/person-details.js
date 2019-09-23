import React, { Component } from 'react';
import './person-details.css';
import Loader from '../loader';
import PersonView from './person-view';
import SWAPIService from '../../services/swapi-service';

export default class PersonDetails extends Component {
    state = {
        person: null,
        loading: true,
    };

    swapi = new SWAPIService();

    updateDetails() {
        const { personID } = this.props;

        if (!personID)  return;
        
        this.setState({
            loading: true,
        });

        this.swapi
            .getPerson(personID)
            .then((item) => {
                this.setState({ person: item, loading: false });
            });
    };

    componentDidMount() {
        this.updateDetails();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personID !== prevProps.personID) {
            this.updateDetails();
        }
    }

    render() {        
        
        const { person, loading } = this.state;

        if (!person) {
            return (
                <span>Select item from a list</span>
            );
        }
        const loader = loading ? <Loader /> : null;
        const data = loading ? null : <PersonView person={ person }/>;
        return (
            <div className="person-details card">
                { loader }
                { data }
            </div>
        );
    };
};