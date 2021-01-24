import React, { useContext, useState } from 'react';
import { StarWarsContext } from '../context';
import { useFiltersArr } from '../hooks';

export default function Filter() {
  const initialState = { column: '', comparison: '', value: '' };
  const { dispatchFilter, FILTER_COLUMN } = useContext(StarWarsContext);
  const [newFilters, setNewFilters] = useState(initialState);
  const setFilter = ({ target: { id, value } }) => {
    setNewFilters({ ...newFilters, [id]: value });
  };
  return (
    <div>
      <div>
        {useFiltersArr()}
      </div>
      <select id="column" data-testid="column-filter" onChange={ setFilter }>
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select id="comparison" data-testid="comparison-filter" onChange={ setFilter }>
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input id="value" data-testid="value-filter" type="number" onChange={ setFilter } />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => dispatchFilter(
          { type: FILTER_COLUMN, payload: newFilters },
        ) }
      >
        Filtre
      </button>
    </div>
  );
}
