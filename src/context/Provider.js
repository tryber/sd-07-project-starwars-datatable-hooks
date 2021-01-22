import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchData from '../services';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
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
  });

  useEffect(() => {
    async function getPlanet() {
      const response = await fetchData();
      setData(response);
    }
    getPlanet();
  }, [setData]);

  const context = {
    data,
    filters,
    setFilters,
  };
  return (
    <StarWarsContext.Provider value={ context }>
      { children}
    </StarWarsContext.Provider>
  );
}
StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
