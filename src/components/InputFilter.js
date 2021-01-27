import React, { useContext } from 'react';
import { StarWarsContext } from '../providers/StarWarsProviders';

const FilterInput = () => {
  const { filterNameFunc, filters } = useContext(StarWarsContext);

  return (
    <input
      data-testid="name-filter"
      type="text"
      value={ filters.filterByName.name }
      onChange={ ({ target }) => filterNameFunc(target.value) }
    />
  );
};

export default FilterInput;
