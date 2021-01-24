import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const StarWarsContext = createContext();

export default function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);

  const [options, setOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const [filters, setFilters] = useState({
    filterByName: {
      name: '' },
    filterByNumericValues: [{ column: 'population', comparison: 'maior que', value: 0 }],
  });

  useEffect(() => {
    async function Api() {
      const endpoint = await fetch('https://swapi-trybe.herokuapp.com/api/planets/?format=json');
      const response = await endpoint.json();
      setData(response.results);
    }
    Api();
  }, []);

  function filterName({ target }) {
    setFilters({ ...filters, filterByName: { name: target.value } });
  }

  function filterOptionsCheck(object) {
    setFilters({ ...filters, filterByNumericValues: [object] });
  }

  function newOptions(opt) { setOptions(options.filter((option) => option !== opt)); }

  const dataConsumer = {
    data,
    filters,
    options,
    filterName,
    filterOptionsCheck,
    newOptions,
  };

  return (
    <StarWarsContext.Provider value={ dataConsumer }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
