import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

function Form() {
  const { nameFilter,
    handleFilterInput, } = useContext(StarWarsContext);

  return (
    <form>
      <label htmlFor="filter-by-name">Filtrar por nome:</label>
      <input data-testid="name-filter" id="filter-by-name" type="text" value={nameFilter} onChange={ handleFilterInput } />
    </form>
  );
}

export default Form;
