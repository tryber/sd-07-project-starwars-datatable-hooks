import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getPlanetsFetch from '../service/getPlanetsAPI';

function Provider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const planetsList = await getPlanetsFetch();
      planetsList.map((planet) => delete planet.residents);
      setData(planetsList);
    };
    fetchPlanets();
  }, []);

  const value = {
    data,
  };

  return (
    <StarWarsContext.Provider value={ value }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = { children: PropTypes.node.isRequired };

export default Provider;
