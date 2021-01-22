import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filter() {
  const {
    setName,
    filters,
    addNumericFilter,
  } = useContext(StarWarsContext);
  const columnNames = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const comparison = ['maior que', 'igual a', 'menor que'];
  return (
    <form>
      <input
        type="text"
        data-testid="name-filter"
        value={ filters.filterByName.name }
        placeholder="Name"
        onChange={ ({ target: { value } }) => setName(value) }
      />
      <select data-testid="column-filter">
        {columnNames.map((column) => (
          <option
            key={ column }
            value={ column }
          >
            {column}
          </option>))}
      </select>
      <select data-testid="comparison-filter">
        {comparison.map((operator) => (
          <option
            key={ operator }
            value={ operator }
          >
            {operator}
          </option>))}
      </select>
      <input type="number" data-testid="value-filter" />
      <button type="button" data-testid="button-filter">
        Filtrar
      </button>
    </form>
  );
}

export default Filter;
