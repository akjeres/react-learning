import React, { Component } from 'react';
import ErrorButton from '../error-button';

const Record = ({ item, field, label }) => {
    console.log('item: ', item);
  return (
      <li className="list-group-item">
          <span className="term">{ label }:</span>
          <span>{ item[field] }</span>
      </li>
  );
};

export {
    Record
};

export default class ItemView extends Component {

    render() {
        const item = this.props.item;
        const { image, name } = item;

        return (
            <React.Fragment>
                <img className="item-image"
                     src={ image }
                     alt={ name }/>
                <div className="card-body">
                    <h4>{ name }</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, (child) => {

                                return React.cloneElement(child, { item });
                            })
                        }
                    </ul>
                    <ErrorButton />
                </div>
            </React.Fragment>
        );
    };
};