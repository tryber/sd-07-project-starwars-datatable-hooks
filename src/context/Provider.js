import React, { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';

const StarWarsContext = createContext();

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: '',
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  });
  const [usedFilters, setUsedFilters] = useState([]);

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

  const updateValueFilters = (chosenFilter) => {
    const newFilter = filters.filterByNumericValues.concat(chosenFilter);
    const newUsedFilters = usedFilters.concat(chosenFilter.column);
    setUsedFilters(newUsedFilters);
    setFilters({ ...filters, filterByNumericValues: newFilter });
  };

  const removeFilter = (column) => {
    const newFilters = filters.filterByNumericValues
      .filter((filter) => filter.column !== column);

    const newUsedFilters = usedFilters.filter((usedFilter) => usedFilter !== column);

    setUsedFilters(newUsedFilters);
    setFilters({ ...filters, filterByNumericValues: newFilters });
  };

  const changeSort = (newOrder) => {
    setFilters({ ...filters, order: newOrder });
  };

  const context = {
    data,
    filters,
    usedFilters,
    updateTextFilter,
    updateValueFilters,
    removeFilter,
    changeSort,
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
