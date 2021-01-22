import React, { useContext } from 'react';

import { StarWarsContext } from '../context/Provider';

export default function NumericFilter() {
  const columns = ['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const comparisons = ['maior que', 'menor que', 'igual a'];
  return (
    <div>
      <select data-testid="column-filter">
        {columns.map((column) => (
          <option key={ column }>{ column }</option>
        ))}
      </select>
      <select data-testid="comparison-filter">
        {comparisons.map((comparison) => (
          <option key={ comparison }>{ comparison }</option>
        ))}
      </select>
      <input
        data-testid='value-filter'
        type="number"
      />

    </div>
  );
}