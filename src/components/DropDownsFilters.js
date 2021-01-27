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
    columnArray,
    setColumnArray,
    filtersArray,
    setFiltersArray,
  } = useContext(StarWarsContext);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === 'filterColumn') setColumnValue(value);
    if (name === 'arithmeticLogic') setArithmeticLogic(value);
    if (name === 'expectedNumber') setNumberValue(value);
  };

  const filterClick = () => {
    setFiltersArray([...filtersArray, { columnValue, arithmeticLogic, numberValue }]);
    const currentColumnArray = columnArray.filter((column) => column !== columnValue);
    setColumnArray(currentColumnArray);
    setColumnValue(currentColumnArray[0]);
  };

  const removeFilter = (column) => {
    const currentColumnArray = [...columnArray, column];
    setColumnArray(currentColumnArray);

    const currentFiltersArray = filtersArray
      .filter(({ columnValue: currentColumnValue }) => currentColumnValue !== column);
    setFiltersArray(currentFiltersArray);
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
          {columnArray.map((column) => (
            <option
              value={ column }
              key={ column }
            >
              { column }
            </option>
          ))}
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
        onClick={ filterClick }
      >
        FILTER
      </button>

      {filtersArray.map((currentObject, index) => (
        <div data-testid="filter" key={ currentObject.columnValue }>
          <p>
            { currentObject.columnValue }
            { currentObject.arithmeticLogic }
            { currentObject.numberValue }
          </p>
          <button
            type="button"
            onClick={ () => removeFilter(currentObject.columnValue, index) }
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default DropDownsFilters;
