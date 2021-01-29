import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './starWarsContext';
import fetchPlanets from '../services/starWarsAPI';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterPlanets, setFilterPlanets] = useState([]);
  const [filters, setFilters] = useState();
  const [ paramArray , setParamArray ] = useState([]);
  
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

  useEffect(() => {
    const getPlanets = async () => {
      const { results } = await fetchPlanets();
      // console.log(results);
      results.forEach((item) => delete item.residents);
      setPlanets(results);
      setFilterPlanets(results);
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
