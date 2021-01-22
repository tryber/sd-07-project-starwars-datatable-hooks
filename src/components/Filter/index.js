import React, { useState, useContext } from 'react';
import context from '../../context';

const Filter = () => {
  const initialFilters = {
    column: 'population',
    comparison: 'greaterThan',
    value: '0',
  };
  const [filter, setFilterForms] = useState(initialFilters);
  const { column, comparison, value } = filter;

  const { changeFiltersNumerics } = useContext(context);
  // const { column, comparison, value } = filters.filterByNumericValues;
  // console.log(name)
  const filterForms = (key, val) => {
    setFilterForms({ ...filter, [key]: val });
  };

  return (
    <div>
      <label htmlFor="planetInformation">
        <select
          id="planetInformation"
          data-testid="column-filter"
          value={ column }
          onChange={ (event) => filterForms('column', event.target.value) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="relationalOperator">
        <select
          id="relationalOperator"
          data-testid="comparison-filter"
          value={ comparison }
          onChange={ (event) => filterForms('comparison', event.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>

      <label htmlFor="valueFilter">
        <input
          type="number"
          id="valueFilter"
          data-testid="value-filter"
          value={ value }
          onChange={ (event) => filterForms('value', event.target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => changeFiltersNumerics(column, comparison, value) }
        onKeyPress={ () => changeFiltersNumerics(column, comparison, value) }
      >
        Aplicar
      </button>
    </div>
  );
};

export default Filter;
