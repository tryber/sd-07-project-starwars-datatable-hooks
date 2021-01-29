import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getPlanets from '../services/API';

function StarWarsProvider({ children }) {
  const filters = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  };

  const [data, setData] = useState([]);
  const [arrayPlanets, setArrayPlanets] = useState([]);
  const [filter, setFilter] = useState(filters);

  useEffect(() => {
    async function fetchData() {
      const response = await getPlanets();
      setData(response);
      setArrayPlanets(response);
    }
    fetchData();
  }, []);

  const value = {
    filter,
    setFilter,
    data,
    setData,
    arrayPlanets,
    setArrayPlanets,
  };

  return (
    <StarWarsContext.Provider
      value={ value }
    >
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
