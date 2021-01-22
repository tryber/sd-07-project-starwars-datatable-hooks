import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import planetsAPI from '../service/planetsAPI';

const StarWarsContext = createContext();

const StarWarsProvider = ({ children }) => {
  const [fetchDate, setFetchDate] = useState(true);
  const [data, setPlanentsData] = useState([]);

  const fetchPlanetsAPI = async () => {
    setPlanentsData(await planetsAPI());
    setFetchDate(false);
  };

  const context = {
    data,
    fetchDate,
  };

  useEffect(() => {
    fetchPlanetsAPI();
  }, []);

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export { StarWarsContext, StarWarsProvider as Provider };
