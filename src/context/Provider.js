import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const Provider = (props) => {
  const { children } = props;
  const [currentPlanets, setCurrentPlanets] = useState([]);
  const [dataByFilter, setDataByFilter] = useState([]);
  const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

  const fetchPlanets = async () => {
    const { results } = await fetch(endpoint).then((response) => response.json());
    setCurrentPlanets(results);
    setDataByFilter(results);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const context = {
    currentPlanets,
    setCurrentPlanets,
    dataByFilter,
    setDataByFilter,
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
