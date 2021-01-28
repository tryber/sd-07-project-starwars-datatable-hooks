import React, { useContext } from 'react';

import context from '../services/context/context';

const ShowFilterOptions = () => {
  const {
    applyNumberFilter,
    filterToApply,
    appliedFilters,
    removeFilter,
    availableFilters,
    columnSort,
    setColumnSort,
    setSorting,
    sortPlanets,
  } = useContext(context);

  const zero = 0;

  return (
    <div>
      <div>
        <select
          data-testid="column-sort"
          onChange={ ({ target }) => setColumnSort(target.value) }
          value={ columnSort }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <div>
          <label htmlFor="column-sort-input-asc">
            ASC
            <input
              onChange={ ({ target }) => setSorting(target.value) }
              type="radio"
              data-testid="column-sort-input-asc"
              id="column-sort-input-asc"
              name="column-sort-input"
              value="ASC"
            />
          </label>
          <label htmlFor="column-sort-input-dsc">
            DSC
            <input
              onChange={ ({ target }) => setSorting(target.value) }
              type="radio"
              data-testid="column-sort-input-desc"
              id="column-sort-input-dsc"
              name="column-sort-input"
              value="DSC"
            />
          </label>
        </div>
        <button
          type="button"
          onClick={ () => sortPlanets() }
          data-testid="column-sort-button"
        >
          Sort
        </button>
      </div>
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => {
          applyNumberFilter(target.value, '', zero, 'change');
        } }
        value={ filterToApply.columnType }
      >
        <option value="None">None</option>
        {availableFilters.map((column, i) => (
          <option key={ i } value={ column }>{ column }</option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => {
          applyNumberFilter('', target.value, zero, 'change');
        } }
        value={ filterToApply.compareType }
      >
        {/* <option value="None">None</option> */}
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        onChange={ ({ target }) => {
          applyNumberFilter('', '', target.value, 'change');
        } }
        type="number"
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => {
          applyNumberFilter('', '', zero, 'add');
        } }
      >
        Que Seja
      </button>
      {appliedFilters.map((filter, index) => (
        <div key={ index }>
          <div data-testid="filter">
            { filter.columnType }
            <button
              name={ filter.columnType }
              onClick={ (e) => removeFilter(e) }
              type="button"
            >
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowFilterOptions;
