import PropTypes from 'prop-types';
import React, { useState } from 'react';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState({});
  return (
    <main>
      <PlanetsContext.Provider value={ { planets, setPlanets } }>
        { children }
      </PlanetsContext.Provider>
    </main>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PlanetsProvider;
