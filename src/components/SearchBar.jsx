import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Table() {
  const { filters, setFilters } = useContext(StarWarsContext);
  const { filterByName } = filters;

  return (
    <div>
      <label htmlFor="name">
        Busca por nome:
        <input
          type="text"
          data-testid="name-filter"
          name="name"
          value={ filterByName.name }
          onChange={ (e) => setFilters({ ...filters, filterByName: { name: e.target.value } }) }
        />
      </label>
    </div>
  );
}
