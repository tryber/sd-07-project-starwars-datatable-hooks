import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FiltersList() {
  const { filters, dispatch } = useContext(StarWarsContext);
  const { filterByNumericValues } = filters;

  const removeFilter = ({ name }) => {
    const newFilter = filterByNumericValues.filter((filter) => filter.column !== name);
    dispatch({ type: 'FILTER_BY_COLUMN', payload: newFilter });
  };

  return (
    <div>
      { filterByNumericValues.map((filter, index) => (
        <div data-testid="filter" key={ filter.column }>
          { `Filtro ${index + 1}: ${filter.column} ${filter.comparison} ${filter.value}` }
          <button
            type="button"
            name={ filter.column }
            onClick={ ({ target }) => removeFilter(target) }
          >
            X
          </button>
        </div>
      )) }
    </div>
  );
}

export default FiltersList;
