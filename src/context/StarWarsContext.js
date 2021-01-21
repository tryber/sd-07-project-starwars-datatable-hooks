import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const StarWarsContext = createContext();

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filters, setFilter] = useState({
    filterByName: '',
    filterByNumericValues: [],
  });

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((json) => setData(json.results));
  }, []);

  const filterByName = (name) => {
    setFilter({ ...filters, filterByName: name });
  };

  const filterByNumericValues = (newNumericFilter) => {
    const { filterByNumericValues: filterNumeric } = filters;
    setFilter({
      ...filters,
      filterByNumericValues: [...filterNumeric, newNumericFilter],
    });
  };

  const context = {
    data,
    filters,
    filterByName,
    filterByNumericValues,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
};

export { StarWarsContext, StarWarsProvider as Provider };

StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
