import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filter() {
  const { setName, filters } = useContext(StarWarsContext);
  return (
    <form>
      <input
        type="text"
        data-testid="name-filter"
        value={ filters.filterByName.name }
        placeholder="Name"
        onChange={ ({ target: { value } }) => setName(value) }
      />
    </form>
  );
}

export default Filter;
