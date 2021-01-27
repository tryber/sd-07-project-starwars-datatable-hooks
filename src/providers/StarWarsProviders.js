import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const StarWarsContext = createContext();

const StarWarsProviders = ({ children }) => {
  const objctInitial = {
    filterByName: { name: '' },
    filterByNumericValue: [{ column: 'population', comparison: 'maior que', value: 0 }],
  };
  const [options, setOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'surface_water',
    'rotation_period',
  ]);
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState(objctInitial);

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

  function filterNumberFunc(id, value) {
    setFilters({
      ...filters,
      filterByNumericValue: [{ ...filters.filterByNumericValue[0], [id]: value }],
    });
  }

  const valuesProvider = {
    data,
    filters,
    filterNameFunc,
    filterNumberFunc,
    options,
    setOptions,
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
