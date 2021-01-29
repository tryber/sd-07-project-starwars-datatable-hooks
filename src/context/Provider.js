import React, { useState, useEffect } from 'react';
import StarWarsContext from './StarWarsContext';
import fetchResult from '../services/fetchStarWarsApi';

function Provider({ children }) {
  const [data, setPlanets] = useState([]);

  useEffect(() => {
    async function fetchPlanetsApi() {
      const fetchPlanets = await fetchResult();
      setPlanets(fetchPlanets);
    }
    fetchPlanetsApi();
  }, []);

  const context = {
    data,
    setPlanets,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
}

export default Provider;
