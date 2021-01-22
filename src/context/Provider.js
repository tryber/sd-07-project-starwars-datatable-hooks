import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchData from '../services/fetchData';
import StartWarsContext from './StartWarsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchPlanets() {
      const arrayPlanets = await fetchData();
      // console.log('array provider', arrayPlanets);
      setData(arrayPlanets);
    }
    fetchPlanets();
  }, []);

  const context = {
    data,
    setData,
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
