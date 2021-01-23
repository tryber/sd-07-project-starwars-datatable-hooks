import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FiltersForm() {
  const {
    handleTextChange,
    textInputValue,
    columnValue,
    comparisonValue,
    numberValue,
    handleColumnChange,
    handleComparisonChange,
    handleNumberChange,
    handleFilterClick,
    handleResetClick,
  } = useContext(StarWarsContext);
  return (
    <form>
      <label htmlFor="textFilter">
        Filter by text
        <input
          id="textFilter"
          type="text"
          placeholder="Search something"
          data-testid="name-filter"
          value={ textInputValue }
          onChange={ handleTextChange }
        />
      </label>
      <label htmlFor="select">
        Column
        <select
          id="select"
          data-testid="column-filter"
          value={ columnValue }
          onChange={ handleColumnChange }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="select">
        Comparison filter
        <select
          id="select"
          data-testid="comparison-filter"
          value={ comparisonValue }
          onChange={ handleComparisonChange }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="numberFilter">
        Number
        <input
          id="numberFilter"
          type="number"
          placeholder="Base number"
          data-testid="value-filter"
          value={ numberValue }
          onChange={ handleNumberChange }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleFilterClick() }
      >
        Teste
      </button>
      <div data-testid="filter">
        <button type="button" onClick={ () => handleResetClick() }>X</button>
      </div>
    </form>
  );
}

export default FiltersForm;
