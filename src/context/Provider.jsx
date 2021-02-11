import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchAPIPlanets from '../services/api';

import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilterOfName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState({
    column: '',
    comparison: '',
    value: 0,
  });
  console.log(filterByNumericValues);

  async function getFetchPlanets() {
    const planetsStarWars = await fetchAPIPlanets();
    setData(planetsStarWars);
  }

  const contextValue = {
    data,
    setData,
    filters,
    setFilterOfName,
    filterByNumericValues,
    setFilterByNumericValues,
  };

  useEffect(() => {
    getFetchPlanets();
  }, []);

  return (
    <StarWarsContext.Provider
      value={ contextValue }
    >
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = { children: PropTypes.element.isRequired };

export default Provider;
