import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterByNumericValues() {
  const { filters, columns } = useContext(StarWarsContext);

  const comparisons = ['maior que', 'menor que', 'igual a'];

  return (
    <div>
      <select
        data-testid="column-filter"
        name="column"
        // onChange={ (target) => handleFilter(target) }
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
        // onChange={ (target) => handleFilter(target) }
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
        value={ filters.filterByNumericValues.value }
        // onChange={ (target) => handleFilter(target) }
      />
      <button
        type="button"
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </div>
  );
}

export default FilterByNumericValues;
