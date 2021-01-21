import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SWContext from './Context';
import fetchPlanets from '../services/api';

export default function StarWarsContext({ children }) {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState([]);
  const [doesDataExists, setDoesDataExists] = useState(false);

  const handleFetch = async () => {
    if (data === []) {
      return null;
    }
    setIsFetching(true);
    console.log('antes');
    const planets = await fetchPlanets();
    console.log('dps');
    setData(planets.results);
    setIsFetching(false);
    setDoesDataExists(true);
  };
  const contextParser = {
    handleFetch,
    isFetching,
    data,
    doesDataExists,
  };
  return (
    <SWContext.Provider value={ contextParser }>{children}</SWContext.Provider>
  );
}

StarWarsContext.propTypes = {
  children: PropTypes.func.isRequired,
};
