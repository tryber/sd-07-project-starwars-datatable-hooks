import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';

function Provider({ children }) {
  const fetchStarWarsPlanet = async () => {
    const fetchPlanet = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const { results } = await fetchPlanet.json();
    console.log(results);
  };

  useEffect(() => {
    fetchStarWarsPlanet();
  }, []);

  const contextStarWars = {
    text: 'text',
  };

  return (
    <StarWarsContext.Provider value={ contextStarWars }>
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default Provider;
