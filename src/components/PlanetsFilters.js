import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function PlanetsFilters() {
  const {
    handleFilterByName,
    handleInputColumn,
    handleInputComparison,
    handleInputValue,
    filterDataButton,
  } = useContext(StarWarsContext);

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handleFilterByName }
        placeholder="Filter by Name"
      />
      <select
        data-testid="column-filter"
        onChange={ handleInputColumn }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ handleInputComparison }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        placeholder="value"
        data-testid="value-filter"
        onChange={ handleInputValue }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ filterDataButton }
      >
        Filter
      </button>
    </div>
  );
}

export default PlanetsFilters;
