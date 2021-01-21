import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Filter() {
  const { handleChange, handleNumericValues } = useContext(StarWarsContext);

  return (
    <section>
      <label htmlFor="name">
        Filtrar por nome
        <input
          data-testid="name-filter"
          type="text"
          id="name"
          onChange={ ({ target }) => handleChange(target.value) }
        />
      </label>
      <label htmlFor="column">
        Filtrar por nome
        <select
          data-testid='column-filter'
          onChange={({ target }) => handleNumericValues(target.name, target.value)}
          name="column"
          id="column"
        >
          <option>population</option>
          <option>diameter</option>
          <option>orbital_period</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison">
        Filtrar por nome
        <select
          data-testid='comparison-filter'
          onChange={({ target }) => handleNumericValues(target.name, target.value)}
          name="comparison"
          id="comparison"
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <label htmlFor="name">
        Filtrar por nome
        <input
          data-testid="value-filter"
          type="number"
          id="value"
          onChange={ ({ target }) => handleNumericValues(target.name, target.value) }
          name="value"
        />
      </label>
      <button
        data-testid='button-filter'
        type="button"
      >
        Adicionar filtro
      </button>
    </section>
  );
}
