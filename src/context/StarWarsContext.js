import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SWContext from './Context';
import fetchPlanets from '../services/api';
import useFilter from '../hooks/useFilter';

export default function StarWarsContext({ children }) {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState([]);
  //   const [dataFiltered, setDataFiltered] = useState([]);
  const [doesDataExists, setDoesDataExists] = useState(false);
  const [filteredPlanets, setByName, setByNum, byName, byNum] = useFilter(data);
  const handleFetch = async () => {
    if (doesDataExists) {
      return null;
    }
    setIsFetching(true);
    const planets = await fetchPlanets();
    setData(planets.results);
    setIsFetching(false);
    setDoesDataExists(true);
  };

  const contextParser = {
    handleFetch,
    isFetching,
    data: filteredPlanets,
    doesDataExists,
    setByName,
    setByNum,
    filters: { filterByName: { byName }, filterByNumericValues: { ...byNum } },
  };
  return (
    <SWContext.Provider value={ contextParser }>{children}</SWContext.Provider>
  );
}

StarWarsContext.propTypes = {
  children: PropTypes.func.isRequired,
};
