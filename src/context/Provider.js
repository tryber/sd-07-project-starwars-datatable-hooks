import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './starWarsContext';
import fetchPlanets from '../services/starWarsAPI';

function StarWarsProvider({ children }) {
  const [filterPlanets, setFilterPlanets] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [filterOptions, setFilterOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [paramArray, setParamArray] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const { results } = await fetchPlanets();
      // precisa desse delete residents aqui?
      results.forEach((item) => delete item.residents);
      setFilterPlanets(results);
      setPlanets(results);
    };
    getPlanets();
  }, []);

  // console.log('aqui', filters);
  const contextValueSW = {
    planets,
    setPlanets,
    filterPlanets,
    setFilterPlanets,
    paramArray,
    setParamArray,
    filterOptions,
    setFilterOptions,
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: paramArray,
    },
  };

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
