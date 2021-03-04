import React, { useState, useEffect } from 'react';
import StarWarsContext from './StarWarsContext';
import starWarsAPI from '../services/Services';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);

  const fetchPlanets = async () => {
    const { results } = await starWarsAPI();
    const expected = results.filter((result) => delete result.residents);
    setPlanets(expected);
  }

  useEffect(() => {
    (fetchPlanets());
  }, [])

  const states = {
    planets,
    setPlanets,
  };

  return (
    <StarWarsContext.Provider value={ states }>
      {children}
    </StarWarsContext.Provider>
  );
}

export default Provider;