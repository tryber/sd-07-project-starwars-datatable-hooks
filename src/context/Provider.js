import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import * as api from '../services/api';

function Provider({ children }) {
  const [resultsApi, setResultsApi] = useState([]);

  const fetchApi = async () => {
    const response = await api.fetchStarWarsApi();
    setResultsApi(response.results);
  };

  // ComponentDidMount
  useEffect(() => {
    fetchApi();
  }, []);

  const contextValue = {
    data: resultsApi,
    filters: {
      filterByName: {},
      filterByNumericValues: [{}],
    },
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
