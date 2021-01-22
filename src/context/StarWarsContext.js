import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const StarWarsContext = createContext();

const Provider = ({ children }) => {
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

  const context = {
    data,
    filters,
    setFilter,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
};

export { StarWarsContext, Provider };

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};
