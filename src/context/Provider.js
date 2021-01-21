import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchStarWarsPlanets from '../services/apiStarWars';

function Provider({ children }) {
  const [data, setPlanets] = useState([]);
  useEffect(() => {
    async function fetchPlanets() {
      const { results } = await fetchStarWarsPlanets();
      setPlanets(results);
    }

    fetchPlanets();
  }, []);

  return (
    <StarWarsContext.Provider value={ { data } }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: Proptypes.node.isRequired,
};

export default Provider;
