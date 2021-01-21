import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Filter() {
  const { handleChange } = useContext(StarWarsContext);

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
    </section>
  );
}
