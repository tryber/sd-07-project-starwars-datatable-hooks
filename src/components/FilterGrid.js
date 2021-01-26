import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

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

    if (valueFilter === '') {
      return console.alert('Please inform Value on Filter!');
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
                { columnValue.toUpperCase() }
              </option>);
          })}
        </select>
        <span>Comparison</span>
        <select
          data-testid="comparison-filter"
          id="comparison-filter"
          name="comparison-filter"
        >
          <option value="maior que">MAIOR QUE</option>
          <option value="menor que">MENOR QUE</option>
          <option value="igual a">IGUAL A</option>
        </select>
        <label htmlFor="value-filter">
          value
          <input type="number" id="value-filter" data-testid="value-filter" min="0" />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ getValues }
        >
          Filter
        </button>
      </div>
    </div>
  );
}

export default FilterGrid;
