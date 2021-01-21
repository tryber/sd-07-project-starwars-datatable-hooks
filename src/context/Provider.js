import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getStarWarsDataAPI from '../services/contextAPI';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);

  const fetchPlanets = async () => {
    const response = await getStarWarsDataAPI();
    const planetsObject = response.results;
    setPlanets(planetsObject);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <StarWarsContext.Provider
      value={ { data: { planets } } }
    >
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
