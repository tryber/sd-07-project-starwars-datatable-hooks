import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

function Form() {
  const { nameFilter,
    handleFilterInput } = useContext(StarWarsContext);

  return (
    <form>
      <input
        data-testid="name-filter"
        id="filter-by-name"
        type="text"
        placeholder="Filtrar por nome"
        value={ nameFilter }
        onChange={ handleFilterInput }
      />
    </form>
  );
}

export default Form;
