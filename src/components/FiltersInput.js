import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FiltersInput() {
  const { handleFilterByName } = useContext(StarWarsContext);

  return (
    <div>
      <label htmlFor="name-filter">
        Filter by name:
        <input
          id="name-filter"
          data-testid="name-filter"
          onChange={ (event) => handleFilterByName(event) }
        />
      </label>
    </div>
  );
}

export default FiltersInput;
