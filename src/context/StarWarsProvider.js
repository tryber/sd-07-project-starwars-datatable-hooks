import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { fetchPlanets } from '../services/api';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState([]);

  const handleFetch = async () => {
    const planets = await fetchPlanets();
    setData(planets.results);
  };

  // const handleFiltered = async () => {
  //   const { filterByName } = filters;
  //   const filtered = await filteredPlanets(filterByName);
  //   setData(filtered.results);
  // };

  useEffect(() => {
    handleFetch();
  }, []);

  // useEffect(() => {
  //   handleFiltered();
  // }, [filters]);

  return (
    <main>
      <StarWarsContext.Provider value={ { data, setData, filters, setFilters } }>
        {children}
      </StarWarsContext.Provider>
    </main>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default StarWarsProvider;
