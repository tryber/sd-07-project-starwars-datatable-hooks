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
        <button type="button">x</button>
      </div>
      <div>
        <label htmlFor="ASC">
          ASC
          <input type="radio" id="ASC" name="sort" />
        </label>
        <label htmlFor="DSC">
          DSC
          <input type="radio" id="DSC" name="sort" />
        </label>
        <button type="button">Ordenar</button>
      </div>
    </header>
  );
}
