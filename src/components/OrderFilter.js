import React, { useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function OrderFilter() {
  const {
    setSortPlanets,
    filters,
    setSortedPlanets,
    filteredPlanets,
  } = useContext(StarWarsContext);

  const { order } = filters;
  const { sort, column } = order;

  const [ordernation, setOrdernation] = useState('ASC');
  const [orderSelected, setOrderSelected] = useState('Name');

  const infos = [
    'name',
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
    'climate',
    'gravity',
    'terrain',
    'films',
    'created',
    'edited',
    'url',
  ];

  const clickSorted = () => {
    setSortPlanets({
      column: orderSelected,
      sort: ordernation,
    });
  };

  const OrderingList = () => {
    const minusOne = -1;
    const zero = 0;

    if (sort === 'ASC') {
      return setSortedPlanets(filteredPlanets.sort((a, b) => a[column] - b[column]));
    } if (sort === 'DESC') {
      setSortedPlanets(filteredPlanets.sort((a, b) => b[column] - a[column]));
    } else {
      setSortedPlanets(filteredPlanets.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return minusOne;
        }
        return zero;
      }));
    }
  };

  const getOrder = ({ target }) => {
    setOrdernation(target.value);
  };

  const getSelectOrder = ({ target }) => {
    setOrderSelected(target.value);
  };

  return (
    <div>
      <label htmlFor="order">
        <span>Ordene por:</span>
        <select
          id="order"
          data-testid="column-sort"
          onChange={ getSelectOrder }
        >
          {infos.map((info) => (
            <option key={ info }>{info}</option>
          ))}
        </select>
      </label>
      <label htmlFor="asc">
        <span>ASC</span>
        <input
          onChange={ getOrder }
          value="ASC"
          id="asc"
          name="radio"
          type="radio"
          data-testid="column-sort-input-asc"
        />
      </label>
      <label htmlFor="desc">
        <span>DESC</span>
        <input
          onChange={ getOrder }
          id="desc"
          value="DESC"
          name="radio"
          type="radio"
          data-testid="column-sort-input-desc"
        />
      </label>
      <button
        onClick={ () => {
          clickSorted();
          OrderingList();
        } }
        data-testid="column-sort-button"
        type="button"
      >
        Ordenar
      </button>
    </div>
  );
}

export default OrderFilter;
