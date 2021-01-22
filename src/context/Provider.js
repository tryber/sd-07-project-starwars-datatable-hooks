import React, { useState, useEffect } from 'react';
import StarWarsContext from './StarWarsContext';
import PlanetAPI from '../services/PlanetStarWarsAPI';

function Provider({ children }) {
  const { Provider } = StarWarsContext;
  const [ planets, setPlanets ] = useState([]);
  const [ filterPlanets, setfilterPlanets ] = useState(planets);
  const [ keysPlanets, setkeysPlanets ] = useState([]);
  const [ isFetching, setFetching ] = useState(true);
  const [ name, setName ] = useState('');

  const stateValues = {
    planets,
    setPlanets,
    filterPlanets,
    setfilterPlanets,
    isFetching,
    setFetching,
    keysPlanets,
    setkeysPlanets,
    filters: {
      filterByName: {
        name,
      }
    },
    setName,
  }

  const fetchData = async () => {
    const data = await PlanetAPI();
    setPlanets(data.results);
    setFetching(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
  <Provider value={ stateValues } >
    { children }
  </Provider>
  );
}

export default Provider;
