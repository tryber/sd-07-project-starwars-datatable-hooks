import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import api from '../services/api';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
  });

  const starWarsPlanets = async () => {
    const { results } = await api();
    setData(results);
  };

  useEffect(() => {
    starWarsPlanets();
  }, []);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setFilters({
      ...filters,
      filterByName: { name: inputValue },
    });
  };

  const context = { data, handleChange, filters };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default StarWarsProvider;
