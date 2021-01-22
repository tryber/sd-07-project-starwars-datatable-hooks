import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StartWarsContext from './StarWarsContext';
import getPlanetsData from '../services';

function Provider({ children }) {
  const [isFetching, setIsFetching] = useState(true);
  const [planetsProvider, setPlanetsProvider] = useState([]);

  const fetchPlanets = async () => {
    const { results } = await getPlanetsData();
    const expected = results.filter((result) => delete result.residents);
    console.log(expected);
    setPlanetsProvider(expected);
    setIsFetching(false);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const context = {
    isFetching,
    planetsProvider,
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
