import React from 'react';
import ErrorButton from '../error-button';

const ItemView = ({ item, path }) => {
    const { id, name, image, ...rest } = item;

    const getListItem = (obj) => {
        const result = [];
        for (let key in obj) {
            if (!~['films', 'homeworld', 'species', 'starships', 'vehicles'].indexOf(key)) {
                result.push({
                    key: key,
                    name: key.replace(/_/, ' '),
                    value: obj[key],
                });
            }
        }
        return result.map((i) => {
            return(
                <li className="list-group-item" key={i['key']}>
                    <span className="term">{ i['name'] }:</span>
                    <span>{i['value']}</span>
                </li>
            );
        });
    }

    const data = getListItem(rest);


    return (
        <React.Fragment>
            <img className="item-image"
                     src={ image }
                     alt={ name }/>
                <div className="card-body">
                    <h4>{ name }</h4>
                    <ul className="list-group list-group-flush">
                        { data }
                    </ul>
                    <ErrorButton />
                </div>
        </React.Fragment>
    );
}

export default ItemView;