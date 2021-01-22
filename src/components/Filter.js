import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import AddFilterForm from './AddFilterForm';

function Filter() {
  const {
    filters,
    removeNumericFilter,
  } = useContext(StarWarsContext);

  return (
    <header>
      <AddFilterForm />
      {filters.filterByNumericValues
        .map(({
          column,
          comparison,
          value,
        }) => (
          <div key={ column } data-testid="filter">
            {`${column} `}
            {`${comparison} `}
            {value}
            <button
              type="button"
              onClick={ () => removeNumericFilter(column) }
            >
              x
            </button>
          </div>
        ))}
    </header>
  );
}

export default Filter;
