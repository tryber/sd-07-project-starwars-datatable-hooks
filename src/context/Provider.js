import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getPlanetsApi from '../services/api';

const { Provider } = StarWarsContext;
function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);

  const fetchPlanets = async () => {
    const planets = await getPlanetsApi();
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
      {children}
    </Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default StarWarsProvider;
