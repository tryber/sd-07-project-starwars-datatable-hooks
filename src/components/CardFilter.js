import React, { useContext } from 'react';
import { Context } from '../context/StarWarsProvider';

function CardFilter() {
  const { filters, reapplyFilters, setFilters, data, setCopyData } = useContext(Context);
  const { filterNumeric } = filters;

  function deleteFilters(index) {
    setCopyData(data);
    const { filterByNumericValues } = filters;
    filterByNumericValues.splice(index, 1);
    setFilters({ ...filters, filterByNumericValues });
    reapplyFilters();
  }
  if (filterNumeric) {
    return (
      <ol>
        {filters.filterByNumericValues.map((line, index) => (
          <li key={ index } data-testid="filter">
            {`${line.column} | ${line.comparison} | ${line.value}`}
            <button
              type="button"
              value="X"
              name="filter"
              onClick={ () => deleteFilters(index) }
            >
              X
            </button>
          </li>
        ))}
      </ol>);
  }
  return (<div />);
}

export default CardFilter;
