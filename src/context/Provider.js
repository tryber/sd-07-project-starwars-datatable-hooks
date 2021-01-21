import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import StarWarsAPI from '../services/StarWarsAPI';

function Provider({ children }) {
  const INITIAL_STATE = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  };

  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({ ...INITIAL_STATE });

  const fetchPlanets = async () => {
    const planets = await StarWarsAPI();
    setData(planets.results);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const handleChangeValue = (name) => {
    setFilters({ ...filters, filterByName: { name } });
  };

  const handleChangeFilterByNumericValue = (field) => {
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, field],
    });
  };

  const contextValue = {
    data,
    filters,
    handleChangeValue,
    handleChangeFilterByNumericValue,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
