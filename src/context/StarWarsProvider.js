import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import * as api from '../services/api';

const Provider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [filterPlanetName, setFilterPlanetName] = useState();
  const [filteredPlanetNumber, setFilteredPlanetNumber] = useState([]);
  const [filterColumn, setFilterColumn] = useState('population');
  const [filterComparison, setFilterComparison] = useState('maior que');
  const [filterValue, setFilterValue] = useState();
  const [filtersArray, setFiltersArray] = useState([]);

  const populatePlanetsOnState = async () => {
    const planetList = await api.fetchPlanetList();
    setPlanets(planetList);
    setFilteredPlanets(planetList);
    setFilteredPlanetNumber(planetList);
  };

  useEffect(() => {
    populatePlanetsOnState();
  }, []);

  const data = {
    planets,
    setPlanets,
    filteredPlanets,
    setFilteredPlanets,
    filteredPlanetNumber,
    setFilteredPlanetNumber,
    setFilterPlanetName,
    filterColumn,
    setFilterColumn,
    filterComparison,
    setFilterComparison,
    filterValue,
    setFilterValue,
    setFiltersArray,
    filters: {
      filterByName: {
        name: filterPlanetName,
      },
      filterByNumericValues: filtersArray,
    },
  };

  return (
    <StarWarsContext.Provider value={ data }>
      {children}
    </StarWarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
