import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import StarWars from '../pages/StarWars';
import { getApi } from '../Services/useApi';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  // const [state, setState] = useState();
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });
  useEffect(() => {
    getApi('https://swapi-trybe.herokuapp.com/api/planets/').then((response) => {
      const requiredPlanets = response.results.map((rplanet) => {
        delete rplanet.residents;
        return rplanet;
      });
      setPlanets(requiredPlanets);
      setFilteredPlanets(requiredPlanets);
    });
  }, []);

  useEffect(() => {
    const { name } = filter.filters.filterByName;
    if (name) {
      const nameFilter = new RegExp(`\\w*${name}\\w*`, 'i');
      const fPlanets = planets.filter((planet) => nameFilter.test(planet.name));
      setFilteredPlanets(fPlanets);
    }
    if (!name) setFilteredPlanets(planets);
  }, [filter]);

  const context = {
    planets,
    setFilter,
    filteredPlanets,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
