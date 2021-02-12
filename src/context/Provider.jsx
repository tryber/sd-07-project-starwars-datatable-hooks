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

  const [orderColumn, setOrderColumn] = useState({
    column: 'name',
    sort: 'ASC',
  });

  async function getFetchPlanets() {
    const planetsStarWars = await fetchAPIPlanets();
    const elementName = 'name';
    planetsStarWars.sort((a, b) => {
      const positive = 1;
      const negative = -1;
      const neutral = 0;
      if (a[elementName] > b[elementName]) return positive;
      if (a[elementName] < b[elementName]) return negative;
      return neutral;
    });
    setData(planetsStarWars);
  }

  const contextValue = {
    data,
    setData,
    filters,
    setFilterOfName,
    filterByNumericValues,
    setFilterByNumericValues,
    orderColumn,
    setOrderColumn,
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
