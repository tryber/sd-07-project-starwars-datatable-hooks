import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const SearchBar = () => {
  const { filterChar } = useContext(StarWarsContext);
  return (
    <div>
      <label htmlFor="searchBar">
        <input
          type="text"
          id="searchBar"
          data-testid="name-filter"
          onChange={ (e) => filterChar(e) }
        />
      </label>
    </div>
  );
};

export default SearchBar;
