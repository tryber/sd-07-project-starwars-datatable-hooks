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
  const [columnArray, setColumnArray] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

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
        columnArray,
        setData,
        setFilters,
        setColumnArray,
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
