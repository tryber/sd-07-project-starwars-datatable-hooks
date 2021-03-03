import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Header() {
  const {
    searchByName,
    nameFilter,
    selectedColumn,
    handleSelectedColumn,
    comparasionFilter,
    handleComparisonFilter,
    valueFilter,
    handleValueFilter,
    filterByNumericValues,
    clearFilters,
  } = useContext(StarWarsContext);
  const columns = ['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  return (
    <header>
      <div>
        <span>Pesquisar por nome: </span>
        <input
          data-testid="name-filter"
          type="text"
          value={ nameFilter }
          onChange={ searchByName }
        />
      </div>
      <div>
        <span>Pesquisar por número de: </span>
        <select
          name="column"
          value={ selectedColumn }
          onChange={ handleSelectedColumn }
          data-testid="column-filter"
        >
          {columns
            .map((column) => <option value={ column } key={ column }>{column}</option>)}
        </select>
        <select
          data-testid="comparison-filter"
          value={ comparasionFilter }
          name="comparison"
          onChange={ handleComparisonFilter }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          value={ valueFilter }
          onChange={ handleValueFilter }
          data-testid="value-filter"
        />
        <button
          type="submit"
          onClick={ filterByNumericValues }
          data-testid="button-filter"
        >
          Pesquisar

        </button>
        <div data-testid="filter">
          <button type="button" onClick={ clearFilters }>x</button>
        </div>
      </div>
      <div>
        <select name="column-sort" data-testid="column-sort">
          <option value="column">population</option>
        </select>
        <label htmlFor="ASC">
          ASC
          <input
            type="radio"
            data-testid="column-sort-input-asc"
            defaultChecked
            id="ASC"
            name="sort"
          />
        </label>
        <label htmlFor="DSC">
          DESC
          <input
            type="radio"
            data-testid="column-sort-input-desc"
            id="DESC"
            name="sort"
          />
        </label>
        <button type="button" data-testid="column-sort-button">Ordenar</button>
      </div>
    </header>
  );
}
