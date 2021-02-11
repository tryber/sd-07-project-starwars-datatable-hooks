import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getPlanetsFetch from '../service/getPlanetsAPI';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const planetsList = await getPlanetsFetch();
      planetsList.map((planet) => delete planet.residents);
      setPlanets(planetsList);
    };
    fetchPlanets();
  }, []);

  const value = {
    planets,
  };

  return (
    <StarWarsContext.Provider value={ value }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = { children: PropTypes.node.isRequired };

export default Provider;
