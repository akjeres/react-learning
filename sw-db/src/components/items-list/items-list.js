import React from 'react';
import './items-list.css';

const ItemsList = (props) => {
    const { data, onItemSelected, children: renderLabel } = props;
    const _renderItems = (arr) => {
        return arr.map((item) => {
            const { id } = item;
            const label = renderLabel(item);

            return(
                <li className="list-group-item"
                    key={ id }
                    onClick={ (e) => {
                        onItemSelected(id);
                    } }
                >
                    { label }
                </li>
            );
        });
    };

    const items = _renderItems(data);
    return (
        <ul className="items-list list-group">
            { items }
        </ul>
    );
};

export default ItemsList;