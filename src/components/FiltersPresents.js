import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

function FiltersPresents() {
  const { filters, setFilter } = useContext(StarWarsContext);

  const deleteFilter = (column, comparison) => {
    const { filterByNumericValues } = filters;
    const newFilter = filterByNumericValues
      .filter((item) => item.column !== column && item.comparison !== comparison);
    setFilter({ ...filters, filterByNumericValues: newFilter });
  };

  return (
    <div>
      {filters.filterByNumericValues.map(({ column, comparison, value }) => (
        <div data-testid="filter" key={ column + comparison }>
          <span>{ column }</span>
          <span>{ comparison }</span>
          <span>{ value }</span>
          <button
            type="button"
            onClick={ () => deleteFilter(column, comparison) }
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default FiltersPresents;
