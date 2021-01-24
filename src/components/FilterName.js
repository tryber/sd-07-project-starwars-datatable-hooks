import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

const FilterName = () => {
  const dataConsumer = useContext(StarWarsContext);
  return (
    <input
      type="text"
      data-testid="name-filter"
      onChange={ dataConsumer.filterName }
    />

  );
};

export default FilterName;
