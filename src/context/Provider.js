import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchPlanets from '../services/starWarsAPI';

const Provider = ({ children }) => {
  const columnInitialNames = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const [columnNames, setColumnNames] = useState(columnInitialNames);
  const [planets, setPlanets] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  const setName = (name) => setFilters({ ...filters, filterByName: { name } });

  const addNumericFilter = ({ column, comparison, value }) => {
    const newNumericFilter = [
      ...filters.filterByNumericValues,
      { column, comparison, value }];
    setFilters({ ...filters, filterByNumericValues: newNumericFilter });
    const newColumnNames = [...columnNames];
    setColumnNames(newColumnNames.filter((name) => name !== column));
  };

  const handleStarWarsSuccess = (response) => {
    const { results } = response;
    setPlanets(results);
    setIsFetching(false);
  };

  const handleStarWarsFailure = (error) => {
    setIsFetching(false);
    console.log(error);
  };

  const fetchStarWars = () => {
    if (isFetching) return;

    setIsFetching(true);
    fetchPlanets()
      .then(handleStarWarsSuccess, handleStarWarsFailure);
  };

  const context = {
    planets,
    isFetching,
    fetchStarWars,
    filters,
    setName,
    addNumericFilter,
    columnNames,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.objectOf.isRequired,
};

export default Provider;
