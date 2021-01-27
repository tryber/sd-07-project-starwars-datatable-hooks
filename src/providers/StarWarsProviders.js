import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const StarWarsContext = createContext();

const StarWarsProviders = ({ children }) => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({ filterByName: { name: '' } });

  useEffect(() => {
    async function fetchAPI() {
      const endpoint = await fetch(
        'https://swapi-trybe.herokuapp.com/api/planets/?format=json',
      );
      const response = await endpoint.json();
      setData(response.results);
    }
    fetchAPI();
  }, []);

  function filterNameFunc(name) {
    setFilters({ ...filters, filterByName: { name } });
  }

  const valuesProvider = {
    data,
    filters,
    filterNameFunc,
  };

  return (
    <StarWarsContext.Provider value={ valuesProvider }>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProviders;
