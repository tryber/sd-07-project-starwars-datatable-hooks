import React, { useContext } from 'react';
import StarWarsContext from './StarWarsContext';

function SearchBar() {
  const { setFilterText } = useContext(StarWarsContext);
  return (
    <div>
      <input
        type="text"
        name="search"
        onChange={ ((event) => setFilterText(event.target.value)) }
        data-testid="name-filter"
      />
      <select data-testid="column-filter">
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select data-testid="comparison-filter">
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input type="number" data-testid="value-filter" />
      <button type="button" data-testid="button-filter">Filters</button>
    </div>
  );
}

export default SearchBar;
