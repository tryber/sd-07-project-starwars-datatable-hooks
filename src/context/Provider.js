import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import StarWars from '../pages/StarWars';
// import useApi from '../Services/useApi';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);

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

  const context = {
    planets,
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
