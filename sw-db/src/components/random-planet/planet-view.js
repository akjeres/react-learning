import React from 'react';

const PlanetView = ({ planet }) => {
    const {
        id,
        name,
        population,
        rotation_period,
        diameter,
    } = planet;

    return(
        <React.Fragment>
            <img className="planet-image"
                 src={`https://starwars-visualguide.com/assets/img/planets/${ id }.jpg`}
                 alt={ name }/>
            <div>
                <h4>{ name }</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{ population }</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{ rotation_period } days</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{ diameter } km</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};

export default PlanetView;