import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import * as api from '../services/api';

const Provider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [filterPlanetName, setFilterPlanetName] = useState();
  const [filteredPlanetNumber, setFilteredPlanetNumber] = useState([]);
  const [filterColumn, setFilterColumn] = useState();
  const [filterComparison, setFilterComparison] = useState();
  const [filterValue, setFilterValue] = useState();

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
    setFilterColumn,
    setFilterComparison,
    setFilterValue,
    filters: {
      filterByName: {
        name: filterPlanetName,
      },
      filterByNumericValues: [
        {
          column: filterColumn,
          comparison: filterComparison,
          value: filterValue,
        },
      ],
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
