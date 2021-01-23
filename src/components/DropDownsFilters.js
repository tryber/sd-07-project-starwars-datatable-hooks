import React from 'react';

function DropDownsFilters() {
  return (
    <div>
      <label htmlFor="filterColumn">
        <select
          id="filterColumn"
          data-testid="column-filter"
        >
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
      </label>

      <label htmlFor="arithmeticLogic">
        <select
          id="arithmeticLogic"
          data-testid="comparison-filter"
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <label htmlFor="expectedNumber">
        <input
          type="number"
          name="expectedNumber"
          id="expectedNumber"
          data-testid="value-filter"
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
      >
        FILTER
      </button>
    </div>
  );
}

export default DropDownsFilters;
