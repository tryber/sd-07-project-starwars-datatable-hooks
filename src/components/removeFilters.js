import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

const Remove = () => {
  const { filter, setFilter } = useContext(StarWarsContext);

  const removeFilters = (column, comparison) => {
    const { filterByNumericValues } = filter;
    const newFilter = filterByNumericValues
      .filter((item) => item.column !== column && item.comparison !== comparison);
    setFilter({ ...filter, filterByNumericValues: newFilter });
  };

  return (<button
    type="submit"
    data-testid="filter"
    onClick={ () => removeFilters() }
  >
    X
  </button>);
};
export default Remove;
