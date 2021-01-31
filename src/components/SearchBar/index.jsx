import React, { useContext } from 'react';
import { StarWarsContext } from '../Context';

function SearchBar() {
  const {
    handleFilterPlanets,
    handleFiltersByColumn,
    handleFiltersByComparison,
    handleFiltersByNumber,
    searchButton,
  } = useContext(StarWarsContext);
  const optionsDropdownNumber = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];

  return (
    <div>
      <input
        type="text"
        placeholder="Type to search"
        data-testid="name-filter"
        onChange={ handleFilterPlanets }
      />
      <select
        data-testid="column-filter"
        onChange={ handleFiltersByColumn }
      >
        {optionsDropdownNumber.map((optionsNumber) => (
          <option
            key={ optionsNumber }
          >
            { optionsNumber }
          </option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ handleFiltersByComparison }
      >
        <option
          value="maior que"
        >
          maior que
        </option>
        <option
          value="menor que"
        >
          menor que
        </option>
        <option
          value="igual a"
        >
          igual a
        </option>
      </select>
      <input
        type="number"
        placeholder="Type to search"
        data-testid="value-filter"
        onChange={ handleFiltersByNumber }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ searchButton }
      >
        Filter
      </button>
    </div>
  );
}

export default SearchBar;
