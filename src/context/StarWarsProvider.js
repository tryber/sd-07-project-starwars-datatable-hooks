import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchPlanets from '../services/fetchPlanets';

function StarWarsProvider({ children }) {
  const [SWPlanets, setSWPlanets] = useState([]);
  const contextValueSW = {
    SWPlanets,
    setSWPlanets,
  };

  useEffect(() => {
    const getPlanets = async () => {
      const { results } = await fetchPlanets();
      // console.log(results);
      results.forEach((item) => delete item.residents);
      // console.log(results);
      setSWPlanets(results);
      // console.log(SWPlanets);
    };
    getPlanets();
  }, []);

  return (
    <main>
      <StarWarsContext.Provider value={ contextValueSW }>
        {children}
      </StarWarsContext.Provider>
    </main>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
