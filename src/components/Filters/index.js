import React, { useContext } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';

import NameFilter from './NameFilter';
import ColumnFilter from './ColumnFilter';

function Filters() {
  const {
    removeColumnFilter,
    filters: { filterByNumericValues },
  } = useContext(StarWarsContext);
  return (
    <>
      <NameFilter />
      <ColumnFilter />
      <div>
        {filterByNumericValues.map(({ column, comparison, value }) => (
          <div key={ column } data-testid="filter">
            {`${column} | ${comparison} | ${value}`}
            <button
              type="button"
              data-testid="filter"
              onClick={ () => removeColumnFilter(column) }
            >
              x
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Filters;
