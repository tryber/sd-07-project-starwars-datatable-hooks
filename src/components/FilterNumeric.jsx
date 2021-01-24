import React, { useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const dropdown = [
  '',
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const relationalOperator = ['', 'maior que', 'menor que', 'igual a'];

function FilterNumeric() {
  const [localFilter, setLocalFilter] = useState({
    column: '',
    comparison: '',
    value: '',
  });

  const { allContext } = useContext(StarWarsContext); // {filterNumber}, allContext{setFilterNumber}

  const { filterNumber, setFilterNumber } = allContext;

  const dropFiltered = filterNumber.map((filter) => filter.column);

  const dropNotFilter = dropdown.filter(
    (column) => !dropFiltered.includes(column),
  );

  return (
    <div>
      <div>
        <select
          data-testid="column-filter"
          onChange={ (event) => setLocalFilter({
            ...localFilter,
            column: event.target.value }) }
        >
          { dropNotFilter.map((column) => (
            <option key={ column } value={ column }>
              { column }
            </option>
          ))}
        </select>
        <select
          data-testid="comparison-filter"
          onChange={ (event) => setLocalFilter({
            ...localFilter,
            comparison: event.target.value }) }
        >
          {relationalOperator.map((comparacao, index) => (
            <option key={ index } value={ comparacao }>
              { comparacao }
            </option>
          ))}
        </select>
        <input
          data-testid="value-filter"
          type="number"
          onChange={ (event) => setLocalFilter({
            ...localFilter,
            value: event.target.value }) }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => setFilterNumber([...filterNumber, localFilter]) }
        >
          Filtrar
        </button>
      </div>
    </div>
  );
}

export default FilterNumeric;
