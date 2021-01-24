import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

const FilterOptions = () => {
  const { filters, filterOptionsCheck, options } = useContext(StarWarsContext);

  function handleChange({ target }) {
    const { id, value } = target;
    const { filterByNumericValues } = filters;
    if (id === 'clmn') {
      filterOptionsCheck(Object.assign(...filterByNumericValues, { column: value }));
    } else if (id === 'compare') {
      filterOptionsCheck(Object.assign(...filterByNumericValues, { comparison: value }));
    } else if (id === 'by-number') {
      filterOptionsCheck(Object.assign(...filterByNumericValues, { value }));
    }
  }

  return (
    <div>
      <select
        id="clmn"
        data-testid="column-filter"
        value={ filters.filterByNumericValues.column }
        onChange={ handleChange }
      >
        {options.map((opt) => (
          <option key={ opt } value={ opt }>
            {opt}
          </option>
        ))}
      </select>
      <select
        id="compare"
        data-testid="comparison-filter"
        value={ filters.filterByNumericValues.comparison }
        onChange={ handleChange }
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
        id="by-number"
        type="number"
        value={ filters.filterByNumericValues.value }
        onChange={ handleChange }
        data-testid="value-filter"
      />
    </div>
  );
};

export default FilterOptions;
