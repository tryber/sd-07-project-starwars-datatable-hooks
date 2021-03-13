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
    optionsFiltered,
    filters: { filterByNumericValues },
  } = useContext(StarWarsContext);

  const ONE = 1;

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
        { optionsFiltered.map((option) => (
          <option key={ option } value={ option }>{ option }</option>)) }
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
