import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState([]);

  const fetchStarWarsPlanet = async () => {
    const fetchPlanet = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const { results } = await fetchPlanet.json();
    setData(await results);
    setTitle(Object.keys(...results));
  };

  useEffect(() => {
    fetchStarWarsPlanet();
  }, []);

  const contextStarWars = {
    data,
    title,
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
