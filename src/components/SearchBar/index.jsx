import React, { useContext } from 'react';
import { StarWarsContext } from '../Context';

function SearchBar() {
  const {
    handleFilterPlanets,
    handleFiltersByColumn,
    handleFiltersByComparison,
    handleFiltersByNumber,
    searchButton,
    deleteParam,
    handleOrderBySelect,
    getOrder,
    orderPlanets,
    filters: { filterByNumericValues,
    },
  } = useContext(StarWarsContext);

  const optionsDropdownNumber = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];

  const dropOrderOptions = [
    'name',
    'rotation_period',
    'orbital_period',
    'diameter',
    'climate',
    'gravity',
    'terrain',
    'surface_water',
    'population',
    'films',
    'created',
    'edited',
    'url',
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
        {filterByNumericValues.length >= 1 ? optionsDropdownNumber
          .filter((option) => (option !== filterByNumericValues[0].column))
          .map((optionsNumber) => (
            <option
              key={ optionsNumber }
            >
              { optionsNumber }
            </option>
          )) : optionsDropdownNumber
          .map((optionsNumber) => (
            <option
              key={ optionsNumber }
            >
              { optionsNumber }
            </option>))}
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
      {filterByNumericValues.length >= 1 ? filterByNumericValues
        .map((filterObj) => (
          <div
            key={ filterObj.column }
            data-testid="filter"
          >
            <p>{filterObj.column}</p>
            <button
              type="button"
              value={ filterObj.column }
              onClick={ deleteParam }
            >
              X
            </button>
          </div>)) : <div />}
      <select
        data-testid="column-sort"
        onChange={ handleOrderBySelect }
      >
        {dropOrderOptions.map((optionsOrder) => (
          <option
            key={ optionsOrder }
          >
            { optionsOrder }
          </option>
        ))}
      </select>
      <input
        type="radio"
        data-testid="column-sort-input-asc"
        value="ASC"
        onClick={ getOrder }
      />
      ASC
      <input
        type="radio"
        data-testid="column-sort-input-desc"
        value="DESC"
        onClick={ getOrder }
      />
      DESC
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={ orderPlanets }
      >
        sort
      </button>
    </div>
  );
}

export default SearchBar;
