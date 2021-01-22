import React, { useContext, useState } from 'react';

import { StarWarsContext } from '../context/Provider';

export default function NumericFilter() {
  const [chosenFilters, setChosenFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  const { filterByValues } = useContext(StarWarsContext);

  const columns = ['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const comparisons = ['maior que', 'menor que', 'igual a'];
  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={
          ({ target }) => setChosenFilters({ ...chosenFilters, column: target.value })
        }
      >
        {columns.map((column) => (
          <option key={ column } value={ column }>{ column }</option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={
          ({ target }) => setChosenFilters({ ...chosenFilters, comparison: target.value })
        }
      >
        {comparisons.map((comparison) => (
          <option key={ comparison } value={ comparison }>{ comparison }</option>
        ))}
      </select>
      <input
        data-testid="value-filter"
        type="number"
        onChange={
          ({ target }) => setChosenFilters({ ...chosenFilters, value: target.value })
        }
      />
      <button
        type="button"
        onClick={ () => filterByValues(chosenFilters) }
      >
        filtrar
      </button>
    </div>
  );
}
