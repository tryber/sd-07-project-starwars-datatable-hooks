import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterRow() {
  const { filter: {
    filters: { filterByNumericValue },
  }, removeFilterByNumericValue } = useContext(PlanetsContext);

  const delFilter = ({ target }) => {
    const newFilterByNumericValue = [...filterByNumericValue];
    newFilterByNumericValue.splice(parseInt(target.name, 10), 1);
    removeFilterByNumericValue(newFilterByNumericValue);
  };

  return (
    <div>
      {filterByNumericValue.map(({ column, comparison, value }, index) => (
        <div data-testid="filter" key={ column }>
          <span>{ column }</span>
          <span>{ comparison }</span>
          <span>{ value }</span>
          <button type="button" onClick={ delFilter } name={ index }>X</button>
        </div>
      ))}
    </div>
  );
}

export default FilterRow;
