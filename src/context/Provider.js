import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import planetsAPI from '../services/planetsAPI';

function Provider({ children }) {
  const [data, setPlanetsList] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const fetchPlanets = async () => {
    setPlanetsList(await planetsAPI());
    setIsFetching(false);
  };

  const context = {
    data,
    isFetching,
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Provider;
