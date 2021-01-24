import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [data, setData] = useState();
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

  const fetchData = async () => {
    const request = await fetch(url);
    const response = await request.json();
    delete response.results.residents;
    setData(response.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StarWarsContext.Provider value={ { data } }>
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
