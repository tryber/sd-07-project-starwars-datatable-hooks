import React, { useContext } from 'react';
import { StarWarsContext } from '../Context';

function SearchBar() {
  const {
    handleFilterPlanets,
  } = useContext(StarWarsContext);
  return (
    <div>
      <input
        type="text"
        placeholder="Type to search"
        data-testid="name-filter"
        onChange={ handleFilterPlanets }
      />
    </div>
  );
}

export default SearchBar;
