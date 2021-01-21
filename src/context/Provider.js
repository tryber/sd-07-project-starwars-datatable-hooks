import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchStarWarsPlanets from '../services/apiStarWars';

function Provider({ children }) {
  const [data, setPlanets] = useState([]);
  // const [dataKeys, setDataKeys] = useState([]);
  const [filters, setFilters] = useState({ filterByName: { name: '' } });

  useEffect(() => {
    async function fetchPlanets() {
      const { results } = await fetchStarWarsPlanets();
      setPlanets(results);
    }

    fetchPlanets();

    // const ZERO = 0;
    // if (data.length !== ZERO) {
    //   setDataKeys(Object.keys(data[0]));
    // }
  }, []);

  return (
    <StarWarsContext.Provider value={ { data, filters, setFilters } }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: Proptypes.node.isRequired,
};

export default Provider;
