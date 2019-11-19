import React, { Component } from 'react';
import ErrorButton from '../error-button';

const Record = ({ field, label }) => {
  return (
      <li className="list-group-item">
          <span className="term">{ label }:</span>
          <span>{ field }</span>
      </li>
  );
};

export {
    Record
};

export default class ItemView extends Component {

    render() {
        const { image, name } = this.props.item;
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
                                console.log('item: ', child);
                                return child;
                            })
                        }
                    </ul>
                    <ErrorButton />
                </div>
            </React.Fragment>
        );
    };
};