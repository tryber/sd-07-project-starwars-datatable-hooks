import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import starwarsAPI from '../services/starwarsAPI';

const Provider = ({ children }) => {
  const [planetsStarWars, setPlanetsStarWars] = useState([]);
  const [isFetching, setFetching] = useState(true);

  const fetchPlanets = async () => {
    if (!isFetching) return;

    await setFetching(() => false);

    await starwarsAPI().then((response) => {
      setPlanetsStarWars(() => response.results);
    });
  };

  const contextValue = {
    planetsStarWars,
    isFetching,
    fetchPlanets,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
};

export default Provider;

Provider.propTypes = {
  children: PropTypes.func.isRequired,
};
