import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/API';
import StarWarsContext from './StarWarsContext';

function GetPlanets({ children }) {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    async function res() {
      const planets = await fetchPlanets();
      setResponse(planets);
    }
    res();
  }, []);

  const state = {
    response,
  };

  return (
    <StarWarsContext.Provider value={ state }>
      {children}
    </StarWarsContext.Provider>
  );
}

GetPlanets.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GetPlanets;
