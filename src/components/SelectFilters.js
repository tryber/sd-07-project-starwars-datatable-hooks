import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function SearchBar() {
  const {
    setFiltersByNumericValues,
    filterByNumericValues,
    applyFilters,
  } = useContext(StarWarsContext);

  // const { column, comparison, value } = filterByNumericValues[0];

  return (
    <div>
      <select
        name="column-filter"
        data-testid="column-filter"
        onChange={
          ({ target: { value } }) => setFiltersByNumericValues([{
            ...filterByNumericValues[0], column: value,
          }])
        }
      >
        <option value="population">
          population
        </option>
        <option value="orbital_period">
          orbital_period
        </option>
        <option value="diameter">
          diameter
        </option>
        <option value="rotation_period">
          rotation_period
        </option>
        <option value="surface_water">
          surface_water
        </option>
      </select>
      <select
        name="comparison-filter"
        data-testid="comparison-filter"
        onChange={
          ({ target: { value } }) => setFiltersByNumericValues([{
            ...filterByNumericValues[0], comparison: value,
          }])
        }
      >
        <option value="maior que">
          maior que
        </option>
        <option value="menor que">
          menor que
        </option>
        <option value="igual a">
          igual a
        </option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        placeholder="Number"
        onChange={
          ({ target: { value } }) => setFiltersByNumericValues([{
            ...filterByNumericValues[0], value,
          }])
        }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ applyFilters }
      >
        Filtrar
      </button>
    </div>
  );
}
