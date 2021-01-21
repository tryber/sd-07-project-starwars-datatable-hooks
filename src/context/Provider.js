import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import starWarsAPI from '../services/starWarsAPI';

function Provider({ children }) {
  const initialFilter = { filterByName: { name: '' }, filterByNumericValues: [] };

  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState(initialFilter);

  const handlePlanetSuccess = (response) => {
    setIsFetching(false);
    setData(response.results);
  };

  const handlePlanetFailure = (e) => {
    setIsFetching(false);
    setError(e.message);
  };

  const getPlanetsAPI = async () => {
    setIsFetching(true);
    starWarsAPI()
      .then(handlePlanetSuccess, handlePlanetFailure);
  };

  const changeFilterByName = (name) => {
    setFilters((prevState) => ({
      ...prevState,
      filterByName: {
        name,
      },
    }));
  };

  const changeFilterByNumber = (column, comparison, value) => {
    setFilters((prevState) => ({
      ...prevState,
      filterByNumericValues: prevState.filterByNumericValues
        .concat({ column, comparison, value }),
    }));
  };

  const valueProvider = {
    data,
    isFetching,
    error,
    filters,
    setData,
    getPlanetsAPI,
    changeFilterByName,
    changeFilterByNumber,
  };

  return (
    <StarWarsContext.Provider value={ valueProvider }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
