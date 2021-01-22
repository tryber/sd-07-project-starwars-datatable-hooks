import React, { useState, useContext } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';

function Order() {
  const [column, setColumn] = useState('population');
  const [order, setOrder] = useState('ASC');

  const { setOrder: ctxSetOrder } = useContext(StarWarsContext);

  return (
    <form
      onSubmit={ (e) => {
        e.preventDefault();
        ctxSetOrder({
          column,
          sort: order,
        });
      } }
    >
      <select
        data-testid="column-sort"
        value={ column }
        onChange={ ({ target }) => setColumn(target.value) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <label htmlFor="asc">
        ASC
        <input
          required
          data-testid="column-sort-input-asc"
          type="radio"
          id="asc"
          name="order"
          value="ASC"
          onChange={ ({ target }) => setOrder(target.value) }
        />
      </label>
      <label htmlFor="desc">
        DESC
        <input
          required
          data-testid="column-sort-input-desc"
          type="radio"
          id="desc"
          name="order"
          value="DESC"
          onChange={ ({ target }) => setOrder(target.value) }
        />
      </label>
      <button
        type="submit"
        data-testid="column-sort-button"
      >
        Ordenar
      </button>
    </form>
  );
}

export default Order;
