import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterClear() {
  const context = useContext(StarWarsContext);
  const { filterByNumericValues, setFilterByNumericValues } = context;

  function handleClick(col) {
    setFilterByNumericValues(
      filterByNumericValues.filter((nFilter) => (nFilter.column !== col)),
    );
  }

  return (
    <div>
      <ul>
        {
          filterByNumericValues.map((filter) => (
            <li
              data-testid="filter"
              key={ filter.column }
            >
              { `${filter.column} ${filter.comparison} ${filter.value}` }
              <button
                type="button"
                onClick={ () => handleClick(filter.column) }
              >
                X
              </button>
            </li>
          ))
        }
      </ul>
    </div>

  );
}

export default FilterClear;
