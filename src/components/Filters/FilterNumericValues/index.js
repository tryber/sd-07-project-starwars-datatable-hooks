import React, { useContext } from 'react';
import StarWarsContext from '../../../context/StarWarsContext';

function FilterNumericValues() {
  const { filter, handleChangeSelect, handleActiveFilter } = useContext(StarWarsContext);
  const { filterNumericValues } = filter;
  const { column, comparison, value } = filterNumericValues;
  const id = 0;

  return (
    <div>
      <select
        data-testid="column-filter"
        name="column"
        value={ column }
        onChange={ (e) => handleChangeSelect(e, id) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select
        data-testid="comparison-filter"
        name="comparison"
        value={ comparison }
        onChange={ (e) => handleChangeSelect(e, id) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <label htmlFor="value">
        Valor:
        <input
          data-testid="value-filter"
          type="number"
          name="value"
          value={ value }
          onChange={ (e) => handleChangeSelect(e, id) }
        />
      </label>

      <button
        type="button"
        onClick={ () => handleActiveFilter(id) }
        data-testid="button-filter"
      >
        Acionar Numeric Filter
      </button>
    </div>
  );
}

export default FilterNumericValues;
