import React, { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';

const StarWarsContext = createContext();

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: '',
    filterByNumericValues: [],
  });
  const [usedFilters, setUsedFilters] = useState([]);

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
    const newUsedFilters = usedFilters;
    newFilter.push(chosenFilters);
    newUsedFilters.push(chosenFilters.column);
    setFilters({ ...filters, filterByNumericValues: newFilter });
    setUsedFilters(newUsedFilters);
  };

  const context = {
    data,
    filters,
    usedFilters,
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
