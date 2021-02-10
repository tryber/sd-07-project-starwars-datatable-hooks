import React, { useContext } from 'react';

import { StarWarsContext } from '../context/Provider';

export default function TextFilter() {
  const { updateTextFilter } = useContext(StarWarsContext);

  return (
    <label htmlFor="name-filter">
      <input
        type="text"
        data-testid="name-filter"
        onChange={ ({ target: { value } }) => { updateTextFilter(value); } }
      />
    </label>
  );
}
