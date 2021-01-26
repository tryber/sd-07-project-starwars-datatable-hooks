import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filter() {
  const { handleChangeFilterName } = useContext(StarWarsContext);
  return (
    <div>
      <input
        id="name-filter"
        type="text"
        data-testid="name-filter"
        onChange={ handleChangeFilterName }
        name="name-filter"
      />
      <select
        data-testid="column-filter"
        name="column-filter"
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison-filter"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual">igual a</option>
      </select>
      <input type="number" data-testid="value-filter" />
      <button
        type="button"
        data-testid="button-filter"
      >
        Adicionar Filtro
      </button>
    </div>
  );
}

export default Filter;
