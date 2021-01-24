import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const [filter, setFilter] = useState({
    filterByName: '',
  });

  const [data, setData] = useState([]);

  const filterText = (parameter) => {
    setFilter({
      filterByName: parameter,
    });
  };

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((json) => setData(json.results));
  }, []);

  const context = {
    data,
    filter,
    filterText,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
};

export default StarWarsProvider;

StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
