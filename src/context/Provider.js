import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import starWarsAPI from '../services/starWarsAPI';

function Provider({ children }) {
  const initialFilter = { filterByName: { name: '' }, filterByNumericValues: [] };

  const [initialData, setInitialData] = useState([]);
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState(initialFilter);

  const handlePlanetSuccess = (response) => {
    setIsFetching(false);
    setData(response.results);
    setInitialData(response.results);
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

  const removeFilter = (column) => {
    setFilters((prevState) => ({
      ...prevState,
      filterByNumericValues: prevState.filterByNumericValues
        .filter((filterNum) => filterNum.column !== column),
    }));
  };

  const filterPlanetsBynumbers = () => {
    let planetFilter = initialData;
    filters.filterByNumericValues.forEach((filter) => {
      const { column, comparison, value } = filter;
      switch (comparison) {
      case 'maior que':
        planetFilter = planetFilter
          .filter((planet) => Number(planet[column]) > Number(value));
        break;
      case 'menor que':
        planetFilter = planetFilter
          .filter((planet) => Number(planet[column]) < Number(value));
        break;
      case 'igual a':
        planetFilter = planetFilter
          .filter((planet) => Number(planet[column]) === Number(value));
        break;
      default: return planetFilter;
      }
    });
    setData(planetFilter);
  };

  const valueProvider = {
    data,
    isFetching,
    error,
    filters,
    removeFilter,
    setData,
    getPlanetsAPI,
    changeFilterByName,
    changeFilterByNumber,
    filterPlanetsBynumbers,
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
