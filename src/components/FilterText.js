import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterText() {
  const { handlerChange, handlerClick } = useContext(StarWarsContext);

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        onChange={ handlerChange }
        name="name"
      />
      <select
        name="column"
        data-testid="column-filter"
        onChange={ handlerChange }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        name="comparison"
        data-testid="comparison-filter"
        onChange={ handlerChange }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        name="value"
        onChange={ handlerChange }
      />
      <button
        onClick={ handlerClick }
        type="button"
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </div>
  );
}

export default FilterText;
