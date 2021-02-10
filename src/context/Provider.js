import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import starwarsAPI from '../services/starwarsAPI';

function Provider({ children }) {
  const [planetsStarWars, setPlanetsStarWars] = useState([]);
  const [isFetching, setFetching] = useState(true);
  const [filterPlanets, setfilterPlanets] = useState([]);
  const [filters, setFilters] = useState([]);

  const fetchPlanets = async () => {
    if (!isFetching) return;

    await setFetching(() => false);

    await starwarsAPI().then((response) => {
      setPlanetsStarWars(() => response.results);
      setfilterPlanets(() => response.results);
    });
  };

  const getFilters = () => {
    filters.forEach((filter) => {
      const { column, comparison, value } = filter;
      if (comparison === 'maior que') {
        setPlanetsStarWars(() => planetsStarWars
          .filter((planet) => parseInt(planet[column], 0) > parseInt(value, 0)));
      } else if (comparison === 'menor que') {
        setPlanetsStarWars(() => planetsStarWars
          .filter((planet) => parseInt(planet[column], 0) < parseInt(value, 0)));
      } else if (comparison === 'igual a') {
        setPlanetsStarWars(() => planetsStarWars
          .filter((planet) => parseInt(planet[column], 0) === parseInt(value, 0)));
      }
    });
  };

  useEffect(() => {
    getFilters();
  }, [filters]);

  async function searchPlanets(value) {
    if (value === '') {
      setFetching(() => true);
      setPlanetsStarWars(() => filterPlanets);
    }

    const filter = filterPlanets
      .filter((planet) => planet.name.includes(value));
    setPlanetsStarWars(() => filter);
  }

  const contextValue = {
    planetsStarWars,
    isFetching,
    filters,
    fetchPlanets,
    searchPlanets,
    setFilters,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.func.isRequired,
};
