import React, { createContext, useState, useEffect } from 'react';
import getPlanets from '../services/planetsAPI';

const StarWarsContext = createContext();

const StarWarsProvider = ({ children }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  async function fetchPlanets() {
    setIsFetching(true);
    getPlanets()
      .then(handleSuccess, handleFailure);
    setIsFetching(false);
  };

  const handleSuccess = (response) => {
    setData(response.results);
  };

  const handleFailure = (response) => {
    setError(response);
  };

  const context = {
    isFetching,
    data,
    error,
    fetchPlanets,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
};

export { StarWarsContext, StarWarsProvider as Provider };
