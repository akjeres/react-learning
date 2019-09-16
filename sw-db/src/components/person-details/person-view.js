import React from 'react';

const PersonView = ({ person }) => {
    console.log('person: ', person);
    const { id, name, ...rest } = person;

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
            <img className="person-image"
                     src={ `https://starwars-visualguide.com/assets/img/characters/${id}.jpg` }
                     alt={ name }/>
                <div className="card-body">
                    <h4>{ name }</h4>
                    <ul className="list-group list-group-flush">
                        { data }
                    </ul>
                </div>
        </React.Fragment>
    );
}

export default PersonView;