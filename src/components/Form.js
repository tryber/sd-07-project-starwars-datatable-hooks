import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Form() {
  const {
    filters: { filterByName: { name } },
    functions,
    filters: { filterByNumericValues } } = useContext(StarWarsContext);
  const { column, comparison, value } = filterByNumericValues;
  return (
    <div>
      <label htmlFor="filter-by-name">
        Filter By Name:
        <input
          id="filter-by-name"
          name="filter_name"
          value={ name }
          type="text"
          data-testid="name-filter"
          onChange={ functions.onHandleChange }
        />
      </label>
      <fieldset>
        <select
          id="column"
          name="column"
          value={ column }
          data-testid="column-filter"
          onChange={ functions.onHandleChange }
        >
          <option key="1">population</option>
          <option key="2">orbital_period</option>
          <option key="3">diameter</option>
          <option key="4">rotation_period</option>
          <option key="5">surface_water</option>
        </select>

        <select
          id="comparison"
          name="comparison"
          value={ comparison }
          data-testid="comparison-filter"
          onChange={ functions.onHandleChange }
        >
          <option key="1">maior que</option>
          <option key="2">menor que</option>
          <option key="3">igual a</option>
        </select>

        <input
          name="value"
          value={ value }
          type="number"
          data-testid="value-filter"
          onChange={ functions.onHandleChange }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ functions.handleFilterByNumericValues }
        >
          Filter By Value
        </button>
      </fieldset>
    </div>
  );
}

export default Form;
