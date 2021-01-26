import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';

function StarWarsProvider({ children }) {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  const fetchPlanets = async () => {
    const planetsFound = await fetch(url)
      .then((response) => response.json())
      .then((data) => data.results);
    planetsFound.forEach((planet) => delete planet.residents);
    setPlanets(planetsFound);
    setFilteredPlanets(planetsFound);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const filterPlanets = (keyWord) => {
    if (keyWord) {
      const findPlanet = planets.filter((planet) => planet.name
        .toLowerCase().includes(keyWord.toLowerCase()));
      setFilteredPlanets(findPlanet);
      return findPlanet;
    }
    setFilteredPlanets(planets);
    return planets;
  };

  return (
    <div>
      <StarWarsContext.Provider value={ { planets, filteredPlanets, filterPlanets } }>
        { children }
      </StarWarsContext.Provider>
    </div>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default StarWarsProvider;
