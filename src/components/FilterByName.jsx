import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterByName() {
  const { allContext } = useContext(StarWarsContext);
  const { setFilterName } = allContext;
  return (
    <div>
      <label htmlFor="name">
        Filtrar por nome
        <input
          type="text"
          id="name"
          data-testid="name-filter"
          onChange={ (event) => setFilterName({
            filterByName: { name: event.target.value } }) }
        />
      </label>
    </div>
  );
}

export default FilterByName;
