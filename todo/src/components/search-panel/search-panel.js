import React from 'react';
import './search-panel.css';

const SearchPanel = () => {

    const seatchText = 'Type here to search';
    const autoComplete = 'off';
    const tabIndex = '1';

    return (
        <input type="search"
            placeholder={seatchText}
            autoComplete={autoComplete}
            tabIndex={tabIndex} />
    );
};

export default SearchPanel;