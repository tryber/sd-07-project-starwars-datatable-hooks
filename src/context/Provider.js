import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getPlanet from '../services/planetAPI';

const { Provider } = StarWarsContext;
const ProviderStarWars = ({ children }) => {
  const [planets, setPlanets] = useState([]);

  const fetchPlanets = async () => {
    const results = await getPlanet();
    setPlanets([...results]);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const context = {
    planets,
  };

  return (
    <Provider value={ context }>
      { children }
    </Provider>
  );
};

ProviderStarWars.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderStarWars;
