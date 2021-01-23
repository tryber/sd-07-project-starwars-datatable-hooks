import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filters, setFilters] = useState({ filterByName: { name: '' } });

  useEffect(() => {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();
      const dataResults = json.results;
      setData(dataResults);
    }
    fetchData();
  }, []);

  const contextValue = {
    data,
    setData,
    filters,
    setFilters,
    filterByName,
    setFilterByName,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
