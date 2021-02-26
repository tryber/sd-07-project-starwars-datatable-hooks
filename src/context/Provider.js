import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import StarWarsContext from './StarWarsContext';
import PlanetFetcher from '../services/PlanetFetcher';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
    availableColumns: [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ],
    order: {
      column: 'name',
      sort: 'EQ',
    },
  });
  const fetchData = async () => {
    const response = await PlanetFetcher.getAll();

    setPlanets(response.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const data = { planets, filters, setFilters };
  return <StarWarsContext.Provider value={ data }>{children}</StarWarsContext.Provider>;
}

Provider.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default Provider;
