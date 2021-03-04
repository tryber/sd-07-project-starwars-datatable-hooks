import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const PlanetContext = createContext();

const PlanetContextProvider = (props) => {
  const [planets, setPlanets] = useState();

  useEffect(() => {
    async function fetchPlanets() {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await response.json();
      const { results } = data;
      setPlanets(results);
    }
    fetchPlanets();
  }, []);

  const { children } = props;
  return (
    <PlanetContext.Provider value={ { planets } }>
      {children}
    </PlanetContext.Provider>
  );
};

export default PlanetContextProvider;

PlanetContextProvider.propTypes = {
  children: PropTypes.objectOf().isRequired,
};
