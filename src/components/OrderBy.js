import React, { useContext, useState } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

function OrderBy() {
  const { orderBy, columns } = useContext(StarWarsContext);
  const [sort, setSort] = useState('ASC');
  const [column, setColumn] = useState('name');

  const handleClickOrder = () => {
    orderBy(sort, column);
  };

  return (
    <div>
      <select
        onChange={ ({ target }) => setColumn(target.value) }
        data-testid="column-sort"
      >
        {
          columns.map((item) => (
            <option
              value={ item }
              key={ item }
            >
              { item }
            </option>
          ))
        }
      </select>

      <label htmlFor="asc">
        <input
          type="radio"
          value="ASC"
          id="asc"
          name="order"
          data-testid="column-sort-input-asc"
          onChange={ ({ target }) => setSort(target.value) }
          checked={ sort === 'ASC' }
        />
        Ascendente
      </label>

      <label htmlFor="desc">
        <input
          type="radio"
          value="DESC"
          id="desc"
          name="order"
          data-testid="column-sort-input-desc"
          onChange={ ({ target }) => setSort(target.value) }
          checked={ sort === 'DESC' }
        />
        Descendente
      </label>

      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ handleClickOrder }
      >
        Ordernar
      </button>
    </div>
  );
}

export default OrderBy;
