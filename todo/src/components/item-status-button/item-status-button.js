import React from 'react';
import './item-status-button.css';

const ItemStatusButton = ({value, text, status}) => {
    const getClassName = (value) => {
        return `btn ${ value === status ? ' btn-info' : 'btn-outline-secondary' }`;
    };
    return (
        <button type="button"
                    data-done={ value }
                    className={ getClassName(value) }>{ text }</button>
    );
};

export default ItemStatusButton;