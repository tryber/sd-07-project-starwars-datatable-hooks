import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function InputTxt() {
  const { setFilters } = useContext(StarWarsContext);

  return (
    <input
      type="text"
      onChange={ ({ target }) => setFilters({
        filterByName: { name: target.value },
      }) }
      data-testid="name-filter"
    />
  );
}

export default InputTxt;
