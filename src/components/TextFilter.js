import React, { useContext } from 'react';

import { StarWarsContext } from '../context/Provider';

export default function TextFilter() {
  const { filterByName } = useContext(StarWarsContext);
  return (
    <div>
      <label htmlFor="name-filter">
        nome:
        <input
          type="text"
          data-testid="name-filter"
          onChange={ ({ target: { value } }) => filterByName(value) }
        />
      </label>
    </div>
  );
}
