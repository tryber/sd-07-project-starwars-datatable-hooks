import React, { useContext, useState } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

function FilterByNumericValues() {
  const { filterByNumericValues } = useContext(StarWarsContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('');
  return (
    <div className="filter-numeric">
      <select
        value={ column }
        onChange={ ({ target }) => setColumn(target.value) }
        data-testid="column-filter"
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select
        value={ comparison }
        onChange={ ({ target }) => setComparison(target.value) }
        data-testid="comparison-filter"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        type="number"
        value={ value }
        onChange={ ({ target }) => setValue(target.value) }
        data-testid="value-filter"
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => filterByNumericValues({ column, comparison, value }) }
      >
        Adicionar Filtro
      </button>
    </div>
  );
}

export default FilterByNumericValues;
