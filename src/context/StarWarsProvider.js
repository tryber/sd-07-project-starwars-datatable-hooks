import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchAPI from '../services/StarWarsPlanetsAPI';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  const dataUpdate = async () => {
    setData(await fetchAPI());
  };

  useEffect(() => {
    dataUpdate();
  }, []);

  const context = {
    data,
    setData,
    filterData,
    setFilterData,
    searchInput,
    setSearchInput,
    filteredPlanets,
    setFilteredPlanets,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default StarWarsProvider;
