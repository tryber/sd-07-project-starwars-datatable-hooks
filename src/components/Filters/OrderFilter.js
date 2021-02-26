import React, { useState, useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function OrderFilter() {
  const [orderName, setOrderName] = useState('name');
  const [orderSort, setOrderSort] = useState('ASC');
  const { planets, filters, setFilters } = useContext(StarWarsContext);
  const zero = 0;
  const columns = planets.length > zero && Object.keys(planets[zero]);

  const handleName = ({ target }) => {
    setOrderName(target.value);
  };

  const handleRadio = (order) => {
    setOrderSort(order);
  };

  const handleOrder = () => {
    setFilters(
      {
        ...filters,
        order: {
          ...filters.order,
          sort: orderSort,
          column: orderName,
        },
      },
    );
  };

  return (
    <div>
      <select data-testid="column-sort" onChange={ handleName }>
        { columns.length > zero && (
          columns.map((column, index) => (
            column !== 'residents' && (
              <option
                key={ index }
                value={ column }
              >
                { column }
              </option>
            )
          ))
        ) }
      </select>
      <div>
        <label htmlFor="ASC">
          <input
            type="radio"
            id="ASC"
            name="ASC"
            value="ASC"
            checked={ orderSort === 'ASC' }
            data-testid="column-sort-input-asc"
            onChange={ () => handleRadio('ASC') }
          />
          ASC
        </label>
      </div>
      <div>
        <label htmlFor="DESC">
          <input
            type="radio"
            id="DESC"
            name="DESC"
            value="DESC"
            checked={ orderSort === 'DESC' }
            data-testid="column-sort-input-desc"
            onChange={ () => handleRadio('DESC') }
          />
          DESC
        </label>
      </div>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ handleOrder }
      >
        Order
      </button>
    </div>
  );
}

export default OrderFilter;
