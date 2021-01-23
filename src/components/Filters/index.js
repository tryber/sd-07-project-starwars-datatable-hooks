import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

export default function Filters() {
  const {
    handleChange,
    handleNumericFilter,
    handleFilterButton,
  } = useContext(StarWarsContext); // Defining wich resources from the Provider I`m using in this component

  return (
    <section>
      <label htmlFor="name">
        Filter by name
        <input
          data-testid="name-filter"
          type="text"
          id="name"
          onChange={ ({ target }) => handleChange(target.value) }
        />
      </label>
      <label htmlFor="column">
        Filter by name
        <select
          data-testid="column-filter"
          onChange={ ({ target }) => handleNumericFilter(target.name, target.value) }
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
      <label htmlFor="comparation">
        Filter by name
        <select
          data-testid="comparison-filter"
          onChange={ ({ target }) => handleNumericFilter(target.name, target.value) }
          name="comparation"
          id="comparation"
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <label htmlFor="name">
        Filter by name
        <input
          data-testid="value-filter"
          type="number"
          id="value"
          onChange={ ({ target }) => handleNumericFilter(target.name, target.value) }
          name="value"
        />
      </label>
      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleFilterButton }
      >
        Add filter
      </button>
    </section>
  );
}
