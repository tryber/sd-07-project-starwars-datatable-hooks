import React, { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';

const StarWarsContext = createContext();

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: '',
    filterByNumericValues: [],
  });

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((json) => {
        setData(json.results);
      });
  }, []);

  const filterByName = (name) => {
    setFilters({ ...filters, filterByName: name });
  };

  const filterByValues = (chosenFilters) => {
    const newFilter = filters.filterByNumericValues;
    newFilter.push(chosenFilters);
    setFilters({ ...filters, filterByNumericValues: newFilter });
  };

  const context = {
    data,
    filters,
    filterByName,
    filterByValues,
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
