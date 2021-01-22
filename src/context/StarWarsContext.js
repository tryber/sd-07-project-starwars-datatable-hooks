import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import getPlanets from '../services/planetsAPI';

const StarWarsContext = createContext();

const StarWarsProvider = ({ children }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({filterByName: {name: ''}});

  const handleSuccess = (response) => {
    setData(response.results);
  };

  const handleFailure = (response) => {
    setError(response);
  };

  async function fetchPlanets() {
    setIsFetching(true);
    getPlanets()
      .then(handleSuccess, handleFailure);
    setIsFetching(false);
  }

  const context = {
    isFetching,
    data,
    error,
    fetchPlanets,
    setFilters,
    filters,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
};

export { StarWarsContext, StarWarsProvider as Provider };

StarWarsProvider.propTypes = {
  children: PropTypes.string.isRequired,
};
