import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import Services from '../services/PlanetService';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);

  const onFetchPlanets = async () => {
    const planetsRes = await Services.fetchPlanets();
    console.log(planetsRes.results);
    setPlanets(planetsRes.results);
  };
  useEffect(() => {
    onFetchPlanets();
  }, []);
  const contextValue = {
    data: planets,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      <h1>dkdjlsjd</h1>
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Provider;
