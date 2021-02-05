import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import starwarsAPI from '../services/starwarsAPI';

const Provider = ({ children }) => {
  const [planetsStarWars, setPlanetsStarWars] = useState([]);
  const [isFetching, setFetching] = useState(true);
  const [filterPlanets, setfilterPlanets] = useState([]);

  const fetchPlanets = async () => {
    if (!isFetching) return;

    await setFetching(() => false);

    await starwarsAPI().then((response) => {
      setPlanetsStarWars(() => response.results);
      setfilterPlanets(() => response.results);
    });
  };

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
    fetchPlanets,
    searchPlanets,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
};

export default Provider;

Provider.propTypes = {
  children: PropTypes.func.isRequired,
};
