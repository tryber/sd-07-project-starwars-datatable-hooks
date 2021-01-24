import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchBar() {
  const { filterNameInput } = useContext(StarWarsContext);
  return (
    <form>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ (event) => filterNameInput(event) }
      />
      <select data-testid='column-filter'>
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select data-testid='comparison-filter'>
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        type="number"
        data-testid='value-filter'
      />
      <button type="submit" data-testid='button-filter'>Filtrar</button>
    </form>
  );
}

export default SearchBar;
