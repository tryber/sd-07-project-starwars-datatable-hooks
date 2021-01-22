import React, { useContext, useState, useRef } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';

function ColumnFilter() {
  const column = useRef(null);
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');

  const {
    setColumnFilter,
    filters: { filterByNumericValues },
  } = useContext(StarWarsContext);

  const onColumnChange = () => {
    setColumnFilter({
      column: column.current.value,
      comparison,
      value,
    });
  };

  const columns = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];
  const filterColumns = filterByNumericValues
    .reduce((acc, curr) => [...acc, curr.column], []);

  return (
    <>
      <select
        data-testid="column-filter"
        ref={ column }
      >
        {columns.filter((col) => !filterColumns.includes(col))
          .map((col) => (<option key={ col } value={ col }>{col}</option>))}
        {/* <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option> */}
      </select>
      <select
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ ({ target }) => setComparison(target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>
      <input
        data-testid="value-filter"
        value={ value }
        onChange={ ({ target }) => setValue(target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ onColumnChange }
      >
        Adicionar filtro
      </button>
    </>
  );
}

export default ColumnFilter;
