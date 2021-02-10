import React, { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';

const StarWarsContext = createContext();

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({ filters: {
    filterByName: '',
  } });

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((json) => {
        setData(json.results);
      });
  }, []);

  const updateTextFilter = (text) => {
    setFilters({ ...filters, filterByName: text });
  };

  const context = {
    data,
    filters,
    updateTextFilter,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { StarWarsContext, StarWarsProvider };
