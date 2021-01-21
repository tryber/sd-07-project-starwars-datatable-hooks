import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import { getPlanets } from '../services/starwarsAPI';

const StarWarsProvider = ({ children }) => {
  const [data, setPlanets] = useState([]);

  useEffect(() => {
    async function fetchPlanets() {
      const { results } = await getPlanets();
      setPlanets(results);
    }
    fetchPlanets();
  });

  const context = {
    data, // resultado da api
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
};

export default StarWarsProvider;

StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
