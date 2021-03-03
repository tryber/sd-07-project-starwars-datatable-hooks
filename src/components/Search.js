import React, { useContext } from 'react';

import StarWarsContext from '../context/StarWarsContext';

function Search() {
  const { filters, setFilters } = useContext(StarWarsContext);

  const handleSearchByName = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: { name: value },
    });
  };

  const handleSearchByNumber = () => {
    const { filterByNumericValues } = filters;

    const { value: column } = document.getElementById('column-filter');
    const { value: comparison } = document.getElementById('comparison-filter');
    const { value } = document.getElementById('value-filter');

    const newNumberFilter = {
      column,
      comparison,
      value,
    };

    const newfilterByNumericValues = filterByNumericValues.concat(newNumberFilter);

    setFilters({
      ...filters,
      filterByNumericValues: newfilterByNumericValues,
    });
  };

  return (
    <form>
      <input
        type="text"
        onChange={ (e) => handleSearchByName(e) }
        id="name-filter"
        data-testid="name-filter"
      />
      {/*  */}
      <select
        id="column-filter"
        data-testid="column-filter"
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      {/*  */}
      <select
        id="comparison-filter"
        data-testid="comparison-filter"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      {/*  */}
      <input
        type="number"
        id="value-filter"
        data-testid="value-filter"
        defaultValue="0"
      />
      <button
        type="button"
        onClick={ handleSearchByNumber }
        data-testid="button-filter"
      >
        Filter
      </button>
    </form>
  );
}

export default Search;
