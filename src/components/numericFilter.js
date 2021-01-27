import React, { useContext, useState } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

function NumericFilter() {
  const { } = useContext(StarWarsContext);

  const [columnFilter, setColumnFilter] = useState('');
  const [comparisonFilter, setComparisonFilter] = useState('');
  const [valueFilter, setValueFilter] = useState('');
  const columns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const comparison = [
    'maior que',
    'menor que',
    'igual a',
  ];

  //

  return (

    <div>
      <select
        data-testid="column-filter"
        onChange={ (e) => setColumnFilter(e.target.value) }
      >
        { columns.map((column) => (
          <option key={ column } value={ column }>
            {column}
          </option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ (e) => setComparisonFilter(e.target.value) }
      >
        {comparison.map((item) => <option key="item">{item}</option>)}
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ (e) => setValueFilter(e.target.value) }
      />
      <button
        type="submit"
        data-testid="button-filter"
        onClick={ () => {} }
      >
        filtro
      </button>
    </div>);
}

export default NumericFilter;
