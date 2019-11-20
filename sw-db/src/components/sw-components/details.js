import React from 'react';
import ItemDetails, { Record } from '../item-details/';
import SWAPIService from '../../services/swapi-service';

const swapi = new SWAPIService();
const {
    getSingle
} = swapi;

const PeopleDetails = ({ id }) => {
    return (<ItemDetails 
        itemID={ id } 
        path={ 'people' } 
        getData={ getSingle }>
        <Record label="Name" field="name" />
        <Record label="Eye color" field="eye_color" />
        <Record label="Birth Year" field="birth_year" />
    </ItemDetails>);
};

const StarshipsDetails = ({ id }) => {
    return (<ItemDetails 
        itemID={ id } 
        path={ 'starships' } 
        getData={ getSingle }>
        <Record label="Name" field="name" />
        <Record label="Cost" field="cost_in_credits" />
        <Record label="Speed" field="max_atmosphering_speed" />
    </ItemDetails>);
};

const PlanetsDetails = ({ id }) => {
    return (<ItemDetails 
        itemID={ id } 
        path={ 'planets' } 
        getData={ getSingle }>
        <Record label="Name" field="name" />
        <Record label="Diameter" field="diameter" />
        <Record label="Climate" field="climate" />
    </ItemDetails>);
};

export {
    PeopleDetails,
    PlanetsDetails,
    StarshipsDetails
};