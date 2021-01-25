import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planetsData, updatePlanets] = useState({});
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

  async function fetchPlanets(urlFetch) {
    const planetsDataResp = await fetch(urlFetch)
      .then((response) => response.json())
      .catch((error) => error.message);
    updatePlanets(planetsDataResp);
  }

  useEffect(() => {
    async function initialFetch() {
      await fetchPlanets(url);
    }
    initialFetch();
  }, [url]);

  const planetContext = {
    planetsData,
  };

  return (
    <PlanetsContext.Provider value={ planetContext }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = { children: PropTypes.node.isRequired };

export default PlanetsProvider;
