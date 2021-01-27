import React, { createContext, useEffect, useState } from 'react';

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

export default StarWarsProviders;
