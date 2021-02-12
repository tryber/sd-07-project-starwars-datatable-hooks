import React, { useContext } from 'react';
import { Context } from '../context/StarWarsProvider';

function CardFilter() {
  const { filters, reapplyFilters, setFilters, data, setCopyData } = useContext(Context);
  const { filterNumeric } = filters;

  function deleteFilters(index) {
    const emptyArray = 0;
    setCopyData(data);
    const { filterByNumericValues } = filters;
    filterByNumericValues.splice(index, 1);
    setFilters({ ...filters, filterByNumericValues });
    console.log(Object.keys(filterByNumericValues).length);
    if (Object.keys(filterByNumericValues).length === emptyArray) {
      setFilters({ ...filters, filterNumeric: false });
    }

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
