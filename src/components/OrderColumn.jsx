import React, { useContext, useState } from 'react';
import { useColumnsKeys } from '../hooks';
import { StarWarsContext } from '../context';

export default function OrderColumn() {
  const { dispatchFilter } = useContext(StarWarsContext);
  const [filter, setFilter] = useState();
  const columns = useColumnsKeys();
  const setValues = (key, value) => {
    setFilter({ ...filter, [key]: value });
  };
  return (
    <div>
      <select
        data-testid="column-sort"
        onChange={ ({ target: { value } }) => setValues('column', value) }
      >
        <option>Order</option>
        {columns
          && columns.map((column, index) => (<option key={ index }>{column}</option>))}
      </select>
      <label htmlFor="ASC">
        <input
          id="ASC"
          name="sort"
          onChange={ () => setValues('sort', 'ASC') }
          type="radio"
          data-testid="column-sort-input-asc"
        />
        Crescente
      </label>
      <label htmlFor="DESC">
        <input
          id="DESC"
          name="sort"
          onChange={ () => setValues('sort', 'DESC') }
          type="radio"
          data-testid="column-sort-input-desc"
        />
        Decrescente
      </label>
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={ () => dispatchFilter({ type: 'FILTER_ORDER', payload: filter }) }
      >
        Ordene
      </button>
    </div>
  );
}
