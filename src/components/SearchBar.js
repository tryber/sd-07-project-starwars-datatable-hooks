import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const SearchBar = () => {
  const { filterByName } = useContext(StarWarsContext);
  return (
    <div>
      <label htmlFor="searchByName">
        <input
          type="text"
          id="searchByName"
          data-testid="name-filter"
          onChange={ (e) => filterByName(e) }
        />
      </label>
    </div>
  );
};
export default SearchBar;
