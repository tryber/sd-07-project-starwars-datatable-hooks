import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Table() {
  const {
    filters,
    setFilters,
    setValues,
    handleClick,
  } = useContext(StarWarsContext);
  const { filterByName } = filters;
  const { filterByNumericValues } = filters;
  const columns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const comparators = ['maior que', 'menor que', 'igual a'];

  return (
    <div>
      <label htmlFor="name">
        Busca por nome:
        <input
          type="text"
          data-testid="name-filter"
          name="name"
          value={ filterByName.name }
          onChange={ (e) => setFilters({
            ...filters, filterByName: { name: e.target.value },
          }) }
        />
      </label>
      <div>
        <select
          data-testid="column-filter"
          id="column"
          value={ filterByNumericValues.column }
          onChange={ (e) => setValues(e.target.id, e.target.value) }
        >
          {columns.map((option) => (
            <option key={ option } value={ option }>
              {option}
            </option>
          ))}
        </select>

        <select
          data-testid="comparison-filter"
          id="comparison"
          value={ filterByNumericValues.comparison }
          onChange={ (e) => setValues(e.target.id, e.target.value) }
        >
          {comparators.map((option) => (
            <option key={ option } value={ option }>
              {option}
            </option>
          ))}
        </select>

        <input
          type="number"
          step={ 1 }
          id="value"
          data-testid="value-filter"
          value={ filterByNumericValues.value }
          onChange={ (e) => setValues(e.target.id, e.target.value) }
        />

        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => handleClick() }
        >
          Filtrar
        </button>
      </div>
    </div>
  );
}
