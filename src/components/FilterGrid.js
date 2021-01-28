import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import FilterRow from './FilterRow';

function FilterGrid() {
  const { updateFilterByName, filter, updateByNumericValue } = useContext(PlanetsContext);
  const { filters: { filterByName: { name } } } = filter;
  const { filters: { filterByNumericValue } } = filter;
  const columnsToFilter = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];

  const getValues = () => {
    const columnFilter = document.getElementById('column-filter').value;
    const comparisonFilter = document.getElementById('comparison-filter').value;
    const valueFilter = document.getElementById('value-filter').value;

    if (columnFilter === '' || valueFilter === '') {
      return null;
    }

    const object = {
      column: columnFilter,
      comparison: comparisonFilter,
      value: valueFilter,
    };

    updateByNumericValue(object);
  };

  return (
    <div>
      <label htmlFor="name-filter">
        Filter Your Planet
        <input
          type="text"
          id="name-filter"
          onChange={ updateFilterByName }
          value={ name }
          data-testid="name-filter"
        />
      </label>
      <div>
        <span>Column Filter</span>
        <select data-testid="column-filter" id="column-filter" name="column-filter">
          { columnsToFilter.map((columnValue, index) => {
            if (filterByNumericValue
              .map(({ column }) => column)
              .includes(columnValue)) return null;
            return (
              <option
                key={ `option-${index}` }
                value={ columnValue }
              >
                { columnValue }
              </option>);
          })}
        </select>
        <span>Comparison</span>
        <select
          data-testid="comparison-filter"
          id="comparison-filter"
          name="comparison-filter"
        >
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
          <option value="menor que">menor que</option>
        </select>
        <label htmlFor="value-filter">
          value
          <input type="text" id="value-filter" data-testid="value-filter" />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ getValues }
        >
          Filter
        </button>
        <FilterRow />
      </div>
    </div>
  );
}

export default FilterGrid;
