import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import { getStarWarsAPI } from '../services/starwarsAPI';

function Provider({ children }) {
  const [thePlanets, setPlanets] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
    columnToGrab: [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ],
  });

  useEffect(() => {
    getStarWarsAPI().then((response) => {
      setPlanets(response);
    });
  }, []);

  const data = { thePlanets, filters, setFilters };

  return (
    <StarWarsContext.Provider value={ data }>
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default Provider;
