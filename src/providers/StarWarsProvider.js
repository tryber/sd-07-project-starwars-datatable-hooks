import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const StarWarsContext = createContext();

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState(
    { filterByName: { name: '' }, filterByNumericValues: [] },
  );

  useEffect(() => {
    async function fetchApi() {
      const endpoint = await fetch('https://swapi-trybe.herokuapp.com/api/planets/?format=json');
      const objct = await endpoint.json();

      setData(objct.results);
    }
    fetchApi();
  }, []);

  const filterByName = (name) => setFilters({ ...filters, filterByName: { name } });
  const filterByNum = (obj) => setFilters({ ...filters, filterByNumericValues: [obj] });

  return (
    <StarWarsContext.Provider value={ { data, filters, filterByName, filterByNum } }>
      { children }
    </StarWarsContext.Provider>
  );
};

export default StarWarsProvider;

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
