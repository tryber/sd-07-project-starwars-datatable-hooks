import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterOrder() {
  const { data, setData, order, setOrder } = useContext(StarWarsContext);

  // const handleChange = ({ target }) => {
  //   const { value } = target;
  //   setOrder(value);
  // };
  // const filterOrderOnClick = () => {
  //   setOrder(
  //     {
  //       column: 'Name',
  //       sort: 'ASC',
  //     },
  //   );
  // };

  const negativo = -1;
  const positivo = 1;
  const zero = 0;
  function orderDesc() {
    const dataOrder = [...data];
    dataOrder.sort((a, b) => {
      if (a[order.column] > b[order.column]) return negativo;
      if (b[order.column] > a[order.column]) return positivo;
      return zero;
    });
    setData(dataOrder);
  }
  function orderAsc() {
    const dataOrder = [...data];
    dataOrder.sort((a, b) => {
      if (a[order.column] > b[order.column]) return positivo;
      if (b[order.column] > a[order.column]) return negativo;
      return zero;
    });
    setData(dataOrder);
  }
  function ordered() {
    if (ordered.sort === 'asc') return orderAsc();
    return orderDesc();
  }

  function handleChangeInput({ value }) {
    setOrder({ ...order, sort: value });
  }

  function handleChange({ value }) {
    setOrder({ ...order, column: value });
  }

  return (
    <div>
      <select
        data-testid="column-sort"
        onChange={ (event) => handleChange(event.target) }
      >
        <option value="name">name</option>
        <option value="rotation_period">rotation_period</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="surface_water">surface_water</option>
        <option value="population">population</option>

      </select>
      <label htmlFor="asc">
        <input
          data-testid="column-sort-input-asc"
          type="radio"
          id="asc"
          name="order"
          value="asc"
          onChange={ (event) => handleChangeInput(event.target) }

        />
        ASC
      </label>
      <label htmlFor="desc">
        <input
          data-testid="column-sort-input-desc"
          type="radio"
          id="desc"
          name="order"
          value="desc"
          onChange={ (event) => handleChangeInput(event.target) }

        />
        DESC
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => ordered() }

      >
        Ordenar
      </button>
    </div>

  );
}

export default FilterOrder;
