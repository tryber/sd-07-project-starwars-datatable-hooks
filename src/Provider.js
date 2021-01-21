import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './context/StarWarsContext';
import planetsApi from './services/planetsApi';

const { Provider } = StarWarsContext;
export default function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);

  const fetchPlanets = async () => {
    const planets = await planetsApi();
    setData({
      ...data,
      planets,
    });
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <Provider value={ data }>
      { children }
    </Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};
