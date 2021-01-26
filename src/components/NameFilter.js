import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function NameFilter() {
  const { setFilterByName } = useContext(StarWarsContext);

  return (
    <div>
      <label htmlFor="name-filter">
        Filtrar por nome:
        <input
          data-testid="name-filter"
          type="text"
          onChange={ ({ target }) => setFilterByName(target.value) }
        />
      </label>
    </div>
  );
}

export default NameFilter;
