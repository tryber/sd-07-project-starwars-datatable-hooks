import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function DropDownsFilters() {
  const {
    columnValue,
    setColumnValue,
    arithmeticLogic,
    setArithmeticLogic,
    numberValue,
    setNumberValue,
    setClickFilter,
    setClickRemoveFilter,
  } = useContext(StarWarsContext);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === 'filterColumn') setColumnValue(value);
    if (name === 'arithmeticLogic') setArithmeticLogic(value);
    if (name === 'expectedNumber') setNumberValue(value);
  };

  return (
    <div>
      <label htmlFor="filterColumn">
        <select
          id="filterColumn"
          name="filterColumn"
          data-testid="column-filter"
          value={ columnValue }
          onChange={ handleChange }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>

      <label htmlFor="arithmeticLogic">
        <select
          id="arithmeticLogic"
          name="arithmeticLogic"
          data-testid="comparison-filter"
          value={ arithmeticLogic }
          onChange={ handleChange }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="expectedNumber">
        <input
          type="number"
          name="expectedNumber"
          id="expectedNumber"
          data-testid="value-filter"
          value={ numberValue }
          onChange={ handleChange }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => setClickFilter(true) }
      >
        FILTER
      </button>
      <button
        type="button"
        data-testid="filter"
        onClick={ () => setClickRemoveFilter(true) }
      >
        X
      </button>
    </div>
  );
}

export default DropDownsFilters;
