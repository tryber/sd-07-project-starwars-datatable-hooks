import React, { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';

import fetchPlanets from '../services/API';

const StarWarsContext = createContext();

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const getPlanets = async () => {
    const planetsData = await fetchPlanets();
    setData({
      data: planetsData,
    });
  };

  useEffect(() => {
    getPlanets();
  }, []);

  const context = { data };

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { StarWarsContext, StarWarsProvider as Provider };
