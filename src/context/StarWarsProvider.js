import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function PlanetProvider({ children }) {
  const [planetsData, setPlanetsData] = useState({});

  const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

  async function fetchPlanets(urlFetch) {
    const planetsDataResp = await fetch(urlFetch)
      .then((response) => response.json())
      .catch((error) => error.message);
    setPlanetsData(planetsDataResp);
  }

  useEffect(() => {
    async function fetchingPlanets() {
      await fetchPlanets(endPoint);
    }
    fetchingPlanets();
  }, [endPoint]);

  const planetContext = {
    planetsData,
    fetchPlanets,
  };

  return (
    <StarWarsContext.Provider value={ planetContext }>
      {children}
    </StarWarsContext.Provider>
  );
}

PlanetProvider.propTypes = { children: PropTypes.node.isRequired };

export default PlanetProvider;
