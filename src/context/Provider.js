import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchData from '../services/fetchData';
import StartWarsContext from './StartWarsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });
  // { column: '', comparison: '', value: 0 }
  useEffect(() => {
    async function fetchPlanets() {
      const arrayPlanets = await fetchData();
      setData(arrayPlanets);
    }
    fetchPlanets();
  }, []);

  // código @vitor-rc1
  const filterByNumericValues = (newNumericFilter) => {
    const { filterByNumericValues: filterNumeric } = filters;
    setFilters({
      ...filters,
      filterByNumericValues: [...filterNumeric, newNumericFilter],
    });
  };

  const context = {
    data,
    setData,
    filters,
    setFilters,
    filterByNumericValues,
  };

  return (
    <StartWarsContext.Provider value={ context }>
      {children}
    </StartWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
