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
    const newFilter = filters.filterByNumericValues.concat(chosenFilters);
    const newUsedFilters = usedFilters.concat(chosenFilters.column);
    setUsedFilters(newUsedFilters);
    setFilters({ ...filters, filterByNumericValues: newFilter });
  };

  const removeFilter = (column) => {
    const newFilters = filters.filterByNumericValues
      .filter((filter) => filter.column !== column);

    const newUsedFilters = usedFilters.filter((usedFilter) => usedFilter === column);

    setFilters({ ...filters, filterByNumericValues: newFilters });
    setUsedFilters(newUsedFilters);
  };

  const context = {
    data,
    filters,
    usedFilters,
    filterByName,
    filterByValues,
    removeFilter,
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
