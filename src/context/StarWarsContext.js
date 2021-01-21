import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SWContext from './Context';
import fetchPlanets from '../services/api';

export default function StarWarsContext({ children }) {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState([]);
  const [dataFiltered, setDataFiltered] = useState([]);
  const [doesDataExists, setDoesDataExists] = useState(false);
  const [name, setName] = useState('');

  const handleFetch = async () => {
    if (doesDataExists) {
      return null;
    }
    setIsFetching(true);
    const planets = await fetchPlanets();
    setData(planets.results);
    setDataFiltered(data);
    setIsFetching(false);
    setDoesDataExists(true);
  };

  useEffect(() => {
    setDataFiltered(data.filter((planet) => planet.name.includes(name)));
  }, [data, name]);

  //   const handleFilterBy = (FilterType)=>{

  //   }
  const contextParser = {
    handleFetch,
    isFetching,
    data: dataFiltered,
    doesDataExists,
    setName,
    filters: { filterByName: { name } },
  };
  return (
    <SWContext.Provider value={ contextParser }>{children}</SWContext.Provider>
  );
}

StarWarsContext.propTypes = {
  children: PropTypes.func.isRequired,
};
