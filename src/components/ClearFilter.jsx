import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function ClearFilter() {
  const context = useContext(StarWarsContext);
  const { numericValuesFiltered, setnumericValuesFiltered } = context;

  function handleClick(col) {
    setnumericValuesFiltered(
      numericValuesFiltered.filter((clFilter) => (clFilter.column !== col)),
    );
  }

  return (
    <div>
      <ul>
        {
          numericValuesFiltered.map((filter) => (
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

export default ClearFilter;
