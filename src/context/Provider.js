import React, { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';

const StarWarsContext = createContext();

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: '',
    filterByNumericValues: [{ comparison: 'maior que', column: 'population', value: 0 }],
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

  const context = {
    data,
    filters,
    usedFilters,
    updateTextFilter,
    updateValueFilters,
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
