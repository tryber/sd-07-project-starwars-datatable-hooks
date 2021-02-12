import React, { useContext, useState } from 'react';
import { Context } from '../context/StarWarsProvider';

function Ordem() {
  const { tableHeader, setFilters, filters, ordinationColumn } = useContext(Context);
  const [column, setColumn] = useState('name');
  const [sort, setSort] = useState('ASC');

  function handleChange({ target }) {
    const { name, value } = target;
    if (name === 'select') setColumn(value);
    if (name === 'order') setSort(value);
    console.log(target.value);
  }

  function ordination() {
    setFilters({ ...filters, order: { column, sort } });
    ordinationColumn(sort, column);
  }

  return (
    <div>
      <select name="select" data-testid="column-sort" onChange={ handleChange }>
        {tableHeader.map((item, index) => (<option key={ index }>{ item }</option>))}
      </select>
      <label htmlFor="asc">
        <input
          type="radio"
          value="ASC"
          name="order"
          data-testid="column-sort-input-asc"
          id="asc"
          onClick={ handleChange }
        />
        ASC
      </label>
      <label htmlFor="desc">
        <input
          type="radio"
          value="DESC"
          name="order"
          data-testid="column-sort-input-desc"
          id="desc"
          onClick={ handleChange }
        />
        DESC
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ ordination }
      >
        Ordenar
      </button>
    </div>
  );
}

export default Ordem;
