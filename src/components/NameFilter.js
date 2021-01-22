import React, { useContext } from 'react';
import { Context } from '../context/StarWarsContext';

function NameFilter() {
  const { allFilters, handleNameFilterChange } = useContext(Context);
  const { filters } = allFilters;
  const { filtersByName } = filters;

  return (
    <input
      data-testid="name-filter"
      value={ filtersByName }
      onChange={ (e) => handleNameFilterChange(e.target.value) }
    />
  );
}

export default NameFilter;
