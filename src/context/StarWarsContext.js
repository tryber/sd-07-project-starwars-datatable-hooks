import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const StarWarsContext = createContext();

export default function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);

  const [filters, setFilters] = useState({
    filterByName: {
      name: '' } });

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

  const dataConsumer = {
    data,
    filters,
    filterName,
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
