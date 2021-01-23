import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);

  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

  useEffect(() => {
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
