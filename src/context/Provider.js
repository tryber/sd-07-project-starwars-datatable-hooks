import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './starWarsContext';
import fetchPlanets from '../services/starWarsAPI';

function StarWarsProvider({ children }) {
  const [filterPlanets, setFilterPlanets] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState();
  const [ paramArray , setParamArray ] = useState([]);
  
  useEffect(() => {
    const getPlanets = async () => {
      const { results } = await fetchPlanets();
      // console.log(results);
      results.forEach((item) => delete item.residents);
      setFilterPlanets(results);
      setPlanets(results);
    };
    getPlanets();
  }, []);

  const contextValueSW = {
    planets,
    setPlanets,
    filterPlanets,
    setFilterPlanets,
    setParamArray,
    filters: {
        filterByName: {
          name: ''
        },
        filterByNumericValues: paramArray,
    }
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
