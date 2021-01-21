import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

function FilterByName() {
  const { filterByName } = useContext(StarWarsContext);

  return (
    <input
      type="text"
      data-testid="name-filter"
      onChange={ ({ target: { value } }) => filterByName(value) }
    />
  );
}

export default FilterByName;
