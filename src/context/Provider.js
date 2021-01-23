import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const Provider = (props) => {
  const { children } = props;
  const [data, setData] = useState([]);
  const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

  const fetchPlanets = async () => {
    const { results } = await fetch(endpoint).then((response) => response.json());
    setData(results);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const context = {
    data,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
