import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import starWarsAPI from '../services/Services';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);

  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });
  const [planetsFilters, setPlanetsFilters] = useState([]);

  const fetchPlanets = async () => {
    const { results } = await starWarsAPI();
    const expected = results.filter((result) => delete result.residents);
    setPlanets(expected);
    setPlanetsFilters(expected);
  };
  const zero = 0;
  const filterPlanetByName = () => {
    if (filters.filterByName.name.length === zero) return undefined;
    const filterToLowerCase = filters.filterByName.name.toLowerCase();
    const test = planetsFilters.filter((planet) => planet.name
      .toLowerCase().includes(filterToLowerCase));
    setPlanetsFilters(test);
    console.log('chamou');
  };

  useEffect(() => {
    (fetchPlanets());
  }, []);

  useEffect(() => {
    if (filters.filterByName.name.length === zero) setPlanetsFilters(planets);
    filterPlanetByName();
  }, [filters]);

  const states = {
    planets,
    planetsFilters,
    filters,
    setPlanets,
    setFilters,
  };

  return (
    <StarWarsContext.Provider value={ states }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
