import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

export default function Filters() {
  const { handleChange } = useContext(StarWarsContext); // Defining wich resources from the Provider I`m using in this component

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
    </section>
  );
}
