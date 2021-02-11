import React, { useContext, useState } from 'react';

import { StarWarsContext } from '../context/Provider';

export default function SortOptions() {
  const { changeSort } = useContext(StarWarsContext);
  const [orderInfo, setOrderInfo] = useState({ column: 'population' });
  const columns = [
    'name',
    'rotation_period',
    'orbital_period',
    'diameter',
    'surface_water',
    'population'];

  return (
    <div>
      Selecionar Ordenação:
      <select
        data-testid="column-sort"
        onChange={ ({ target }) => setOrderInfo({ ...orderInfo, column: target.value }) }
      >
        {columns.map((column) => (
          <option key={ column }>{ column }</option>
        ))}
      </select>
      <label htmlFor="ASC">
        <input
          type="radio"
          id="ASC"
          name="sort-direction"
          value="ASC"
          onClick={ ({ target }) => setOrderInfo({ ...orderInfo, sort: target.value }) }
        />
        Ascendente
      </label>
      <label htmlFor="DESC">
        <input
          type="radio"
          id="DESC"
          name="sort-direction"
          value="DESC"
          onClick={ ({ target }) => setOrderInfo({ ...orderInfo, sort: target.value }) }
        />
        Descendente
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => changeSort(orderInfo) }
      >
        Ordenar
      </button>
    </div>
  );
}
