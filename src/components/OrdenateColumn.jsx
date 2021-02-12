import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import fetchAPIPlanets from '../services/api';

function OrdenateColumn() {
  const sendPlanetsStateGlobal = useContext(StarWarsContext);
  const { setData } = sendPlanetsStateGlobal;
  const [orderColumnLocal, setOrderColumnLocal] = useState('');
  const [orderAscOrDesc, setOrderAscOrDesc] = useState('');
  const [getAPI, setGetAPI] = useState([]);

  const fnGetDataAPI = async () => {
    const dataApiReceived = await fetchAPIPlanets();
    setGetAPI(dataApiReceived);
  };

  const ordenateFnSet = () => {
    const ordenate = (a, b) => {
      const positive = 1;
      const negative = -1;
      const neutral = 0;
      if (orderAscOrDesc === 'ASC') {
        if (Number(a[orderColumnLocal]) > Number(b[orderColumnLocal])) {
          return positive;
        }
        if (Number(a[orderColumnLocal]) < Number(b[orderColumnLocal])) {
          return negative;
        }
        return neutral;
      }
      if (orderAscOrDesc === 'DESC') {
        if (Number(a[orderColumnLocal]) > Number(b[orderColumnLocal])) {
          return negative;
        }
        if (Number(a[orderColumnLocal]) < Number(b[orderColumnLocal])) {
          return positive;
        }
        return neutral;
      }
    };
    const insertOrdenation = getAPI.sort(ordenate);
    setData(insertOrdenation);
  };

  useEffect(() => {
    fnGetDataAPI();
  }, []);

  return (
    <div>
      <select
        data-testid="column-sort"
        value={ orderColumnLocal }
        onChange={ (event) => setOrderColumnLocal(event.target.value) }
      >
        <option value="">Selecione a coluna para ordenar</option>
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <div>
        <label htmlFor="ASC">
          <input
            data-testid="column-sort-input-asc"
            type="radio"
            id="ASC"
            name="order"
            value="ASC"
            onChange={ (event) => setOrderAscOrDesc(event.target.value) }
          />
          Ordem Crescente
        </label>
        <label htmlFor="DESC">
          <input
            data-testid="column-sort-input-desc"
            type="radio"
            id="DESC"
            name="order"
            value="DESC"
            onChange={ (event) => setOrderAscOrDesc(event.target.value) }
          />
          Ordem Decrecente
        </label>
      </div>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ ordenateFnSet }
      >
        Ordenar
      </button>
    </div>
  );
}

export default OrdenateColumn;
