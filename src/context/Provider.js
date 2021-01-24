import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import StarWars from '../pages/StarWars';
// import useApi from '../Services/useApi';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [state, setState] = useState('');
  // { filters: { filterByName: { name: '' } } }
  const [planets, setPlanets] = useState([]);
  // const [filter, setFilter] = useState([]);

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((response) => {
        const filteredPlanet = response.results.map((fplanet) => {
          delete fplanet.residents;
          return fplanet;
        });
        setPlanets(filteredPlanet);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const nameFilter = new RegExp(`\\w*${state}\\w*`);
    if (nameFilter) {
      const filteredPlanets = planets.filter((planet) => nameFilter.test(planet.name));
      setPlanets(filteredPlanets);
    }
  }, [state]);

  const context = {
    planets,
    state,
    setState,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
