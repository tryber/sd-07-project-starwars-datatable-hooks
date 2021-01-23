import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchData from '../services/fetchData';
import StartWarsContext from './StartWarsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({ filterByName: { name: '' } });

  useEffect(() => {
    async function fetchPlanets() {
      const arrayPlanets = await fetchData();
      setData(arrayPlanets);
    }
    fetchPlanets();
  }, []);

  const context = {
    data,
    setData,
    filters,
    setFilters,
  };

  return (
    <StartWarsContext.Provider value={ context }>
      {children}
    </StartWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
