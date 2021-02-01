import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function PlanetsFilters() {
  const {
    handleFilterByName,
    handleInputColumn,
    handleInputComparison,
    handleInputValue,
    filterDataButton,
    deleteFilter,
    filters: { filterByNumericValues },
  } = useContext(StarWarsContext);

  const optionsColumn = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const ONE = 1;
  const optionsDropdownToSort = [
    'name', 'rotation_period', 'orbital_period', 'diameter', 'climate', 'gravity',
    'terrain', 'surface_water', 'population', 'created', 'edited', 'films', 'url'];

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handleFilterByName }
        placeholder="Filter by Name"
      />
      <select
        data-testid="column-filter"
        onChange={ handleInputColumn }
      >
        { filterByNumericValues.length >= ONE
          ? optionsColumn
            .filter((option) => (option !== filterByNumericValues[0].column))
            .map((option) => (
              <option key={ option } value={ option }>{ option }</option>))
          : optionsColumn.map((option) => (
            <option key={ option } value={ option }>{ option }</option>))}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ handleInputComparison }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        placeholder="value"
        data-testid="value-filter"
        onChange={ handleInputValue }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ filterDataButton }
      >
        Filter
      </button>
      <select>
        {optionsDropdownToSort.map((option) => (
          <option key={ option } value={ option }>{option}</option>
        ))}
      </select>
      <label htmlFor="ASC">
        ASC
        <input
          type="radio"
          data-testid="column-sort-input-asc"
          id="ASC"
          value="ASC"
          // onClick={ () => sortBy('ASC') }
        />
      </label>
      <label htmlFor="DESC">
        DESC
        <input
          type="radio"
          data-testid="column-sort-input-desc"
          id="DESC"
          value="DESC"
          // onClick={ () => sortBy('DESC') }
        />
      </label>
      <button
        data-testid="column-sort-button"
        type="button"
        // onClick={ () => sortPlanets() }
      >
        Order
      </button>
      { filterByNumericValues.length >= ONE
        ? filterByNumericValues.map((filter, index) => (
          <div data-testid="filter" key={ index }>
            <p>
              {`Filter ${index + 1}:
              ${filter.column} ${filter.comparison} ${filter.value}` }
            </p>
            <button
              type="button"
              value={ filter.column }
              onClick={ deleteFilter }
            >
              X
            </button>
          </div>
        )) : <div>Sem filtros</div>}
    </div>
  );
}

export default PlanetsFilters;
