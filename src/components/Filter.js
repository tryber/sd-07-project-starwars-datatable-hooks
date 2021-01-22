import React, { useContext, useState } from 'react';
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

  const zero = 0;
  const [columnFilter, setColumn] = useState('population');
  const [comparisonFilter, setComparison] = useState('maior que');
  const [valueFilter, setValue] = useState(zero);

  return (
    <form>
      <input
        type="text"
        data-testid="name-filter"
        value={ filters.filterByName.name }
        placeholder="Name"
        onChange={ ({ target: { value } }) => setName(value) }
      />
      <select
        data-testid="column-filter"
        value={ columnFilter }
        onChange={ ({ target: { value } }) => setColumn(value) }
      >
        {columnNames.map((column) => (
          <option
            key={ column }
            value={ column }
          >
            {column}
          </option>))}
      </select>
      <select
        data-testid="comparison-filter"
        value={ comparisonFilter }
        onChange={ ({ target: { value } }) => setComparison(value) }
      >
        {comparison.map((operator) => (
          <option
            key={ operator }
            value={ operator }
          >
            {operator}
          </option>))}
      </select>
      <input
        type="number"
        data-testid="value-filter"
        value={ valueFilter }
        onChange={ ({ target: { value } }) => setValue(value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => addNumericFilter({
          column: columnFilter,
          comparison: comparisonFilter,
          value: valueFilter,
        }) }
      >
        Filtrar
      </button>
    </form>
  );
}

export default Filter;
