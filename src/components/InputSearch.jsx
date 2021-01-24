import React, { useContext } from 'react';
import { StarWarsContext } from '../context';

export default function InputSearch() {
  const { dispatchFilter, FILTER_NAME } = useContext(StarWarsContext);
  const setFilter = (value) => {
    dispatchFilter({ type: FILTER_NAME, payload: value });
  };
  return (
    <input
      type="text"
      data-testid="name-filter"
      onChange={ ({ target: { value } }) => setFilter(value) }
    />
  );
}
