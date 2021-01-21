import React, { createContext, useState } from 'react';
import getPlanets from '../services/planetsAPI';

const StarWarsContext = createContext();

const StarWarsProvider = ({children}) => {

  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  const fetchPlanets = () => {
    setIsFetching(true);
    getPlanets()
      .then(handleGetPlanetsSuccess, handleGetPlanetsFailure);
  }

  const handleGetPlanetsSuccess = (response) => {
    setData(response);
  }

  const handleGetPlanetsFailure = (response) => {
    setError(response);
  }

  const context = {
    isFetching,
    data,
    error,
    fetchPlanets,
  };

  return (
    <StarWarsContext.Provider value={context}>
      {children}
    </StarWarsContext.Provider>
  );
}

export { StarWarsContext, StarWarsProvider as Provider };
