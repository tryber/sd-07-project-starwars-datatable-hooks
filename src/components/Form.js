import React, { useContext, useEffect } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

function Form() {
  const { setFilters, filters } = useContext(StarWarsContext);

  const handleInput = (target) => {
    setFilters(target.value);
  };

  return (
    <form>
      <label htmlFor="filter-by-name">Filtrar por nome:</label>
      <input data-testid="name-filter" id="filter-by-name" type="text" value="" onChange={ handleInput } />
    </form>
  );
}

export default Form;
