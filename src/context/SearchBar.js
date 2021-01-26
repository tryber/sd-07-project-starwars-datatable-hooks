import React, { useContext, useState } from 'react';
import StarWarsContext from './StarWarsContext';

function SearchBar() {
  const { setSelect, setFilterName } = useContext(StarWarsContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');

  return (
    <div>
      <input
        type="text"
        name="search"
        onChange={ ((event) => setFilterName(event.target.value)) }
        data-testid="name-filter"
      />
      <select data-testid="column-filter" onChange={ (e) => setColumn(e.target.value) }>
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ (e) => setComparison(e.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ (e) => setValue(e.target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => setSelect(column, comparison, value) }
      >
        Filters
      </button>
    </div>
  );
}

export default SearchBar;
