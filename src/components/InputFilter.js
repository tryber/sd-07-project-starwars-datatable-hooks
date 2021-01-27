import React, { useContext } from 'react';
import { StarWarsContext } from '../providers/StarWarsProviders';

const FilterInput = () => {
  const { filterNameFunc, filters, options, filterNumberFunc } = useContext(
    StarWarsContext,
  );
  const { filterByName, filterByNumericValue } = filters;

  return (
    <>
      <input
        data-testid="name-filter"
        type="text"
        value={ filterByName.name }
        onChange={ ({ target }) => filterNameFunc(target.value) }
      />
      <select
        id="column"
        data-testid="column-filter"
        onChange={ ({ target: { id, value } }) => filterNumberFunc(id, value) }
        value={ filterByNumericValue.column }
      >
        {options.map((option) => (
          <option key={ option } value={ option }>
            {option}
          </option>
        ))}
      </select>
      <select
        id="comparison"
        data-testid="comparison-filter"
        onChange={ ({ target: { id, value } }) => filterNumberFunc(id, value) }
        value={ filterByNumericValue.comparasion }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        id="value"
        data-testid="value-filter"
        type="number"
        value={ filterByNumericValue.value }
        onChange={ ({ target: { id, value } }) => filterNumberFunc(id, value) }
      />
    </>
  );
};

export default FilterInput;
