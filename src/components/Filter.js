import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import AddFilterForm from './AddFilterForm';

function Filter() {
  const {
    filters,
    allColumns,
    removeNumericFilter,
    setOrder,
  } = useContext(StarWarsContext);

  const [columnFilter, setColumn] = useState('name');
  const [order, setOrd] = useState('ASC');

  return (
    <header>
      <AddFilterForm />
      <div>
        <select
          data-testid="column-sort"
          value={ columnFilter }
          onChange={ ({ target: { value } }) => setColumn(value) }
        >
          {allColumns.map((column) => (
            <option
              key={ column }
              value={ column }
            >
              { column }
            </option>
          ))}
        </select>
        <label
          htmlFor="ASC"
        >
          <input
            type="radio"
            name="order"
            id="ASC"
            value="ASC"
            data-testid="column-sort-input-asc"
            onChange={ () => setOrd('ASC') }
            checked={ order === 'ASC' }
          />
          Ascendent
        </label>
        <label
          htmlFor="DESC"
        >
          <input
            type="radio"
            name="order"
            id="DESC"
            value="DESC"
            data-testid="column-sort-input-desc"
            onChange={ () => setOrd('DESC') }
            checked={ order === 'DESC' }
          />
          Descendent
        </label>
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ () => setOrder({
            column: columnFilter,
            sort: order,
          }) }
        >
          Ordenar
        </button>
      </div>
      {filters.filterByNumericValues
        .map(({
          column,
          comparison,
          value,
        }) => (
          <div key={ column } data-testid="filter">
            {`${column} `}
            {`${comparison} `}
            {value}
            <button
              type="button"
              onClick={ () => removeNumericFilter(column) }
            >
              x
            </button>
          </div>
        ))}
    </header>
  );
}

export default Filter;
