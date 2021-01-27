import React, { useContext } from 'react';

import StarWarsContext from '../context/StarWarsContext';

function FilterPlanets() {
  const { handleFilterName, handleFilter, sendFilter } = useContext(StarWarsContext);
  return (
    <form>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Filtrar por nome"
        onChange={ handleFilterName }
        name="name"
      />
      <select
        required
        name="column"
        onChange={ handleFilter }
        data-testid="column-filter"
      >
        <option selected disabled value="">Selecionar</option>
        <option value="population">População</option>
        <option value="orbital_period">Periodo Orbital</option>
        <option value="diameter">Diâmetro</option>
        <option value="rotation_period">Periodo de Rotação</option>
        <option value="surface_water">Superfície da água</option>
      </select>
      <select
        required
        name="comparison"
        onChange={ handleFilter }
        data-testid="comparison-filter"
      >
        <option selected disabled value="">{'>/=/<'}</option>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        required
        name="value"
        onChange={ handleFilter }
        data-testid="value-filter"
        type="number"
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ sendFilter }
      >
        Filtrar
      </button>
    </form>
  );
}

export default FilterPlanets;
