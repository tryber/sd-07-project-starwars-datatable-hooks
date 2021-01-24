import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchStarWarsPlanets from '../services/apiStarWars';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState(
    {
      filterByName: { name: '' },
      filterByNumericValues: [],
    },
  );

  useEffect(() => {
    async function fetchPlanets() {
      const { results } = await fetchStarWarsPlanets();
      setData(results);
    }

    fetchPlanets();
  }, []);

  return (
    <StarWarsContext.Provider
      value={ {
        data,
        filters,
        setData,
        setFilters,
      } }
    >
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: Proptypes.node.isRequired,
};

export default Provider;
