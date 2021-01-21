import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import * as api from '../services/api';

const Provider = ({ children }) => {
  const [planets, setPlanets] = useState([]);

  const populateState = async () => {
    const planetList = await api.fetchPlanetList();
    setPlanets(planetList);
  };

  useEffect(() => {
    populateState();
  }, []);

  const data = {
    planets,
    setPlanets,
  };

  return (
    <StarWarsContext.Provider value={ data }>
      {children}
    </StarWarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
