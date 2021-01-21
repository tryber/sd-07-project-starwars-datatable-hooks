import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/api';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const getPlanets = async () => {
    setData(await fetchPlanets());
    setIsFetching(false);
  };

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <StarWarsContext.Provider value={ { data, isFetching } }>
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Provider;
