import React from 'react';
import './SearchBar.css';

function SearchBar(props) {
    return (
        <input
            className='searchInput'
            placeholder='Buscar columna'
            type='text'
            ref={props.myRef}
            onChange={props.handleSearch}
        />
    );
}

export default SearchBar;
