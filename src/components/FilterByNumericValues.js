import React, { useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterByNumericValues() {
  const { columns, setFilterByNumericValues } = useContext(StarWarsContext);

  const [columnFilter, setColumnFilter] = useState('');
  const [comparisonFilter, setComparisonFilter] = useState('');
  const [valueFilter, setValueFilter] = useState('');

  const comparisons = ['maior que', 'menor que', 'igual a'];

  function handleClick () {
    const numericFilter = { columnFilter, comparisonFilter, valueFilter };
    setFilterByNumericValues(numericFilter);
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        name="column"
        onChange={ ({ target: { value } }) => setColumnFilter(value) }
      >
        { columns.map((column) => (
          <option key={ column } value={ column }>
            {column}
          </option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ ({ target: { value } }) => setComparisonFilter(value) }
      >
        {
          comparisons.map((opt) => (
            <option key={ opt } value={ opt }>
              { opt }
            </option>
          ))
        }
      </select>
      <input
        data-testid="value-filter"
        name="value"
        type="number"
        onChange={ ({ target: { value } }) => setValueFilter(value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </div>
  );
}

export default FilterByNumericValues;
