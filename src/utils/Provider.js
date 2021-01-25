import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';
// import mockData from '../testData';

function Provider(props) {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState([]);
  const names = 'name';
  const menosUm = -1;

  const fetchStarWarsPlanet = async () => {
    const fetchPlanet = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const { results } = await fetchPlanet.json();
    setData(results.sort((a, b) => {
      if (a[names] > b[names]) {
        return 1;
      }
      return menosUm;
    }));
    setTitle(Object.keys(...results));
  };

  /*     const fetchStarWarsPlanet = async () => {
    const { results } = mockData;
    setData(results);
    setTitle(Object.keys(...results));
  }; */

  useEffect(() => {
    fetchStarWarsPlanet();
  }, []);

  const contextStarWars = {
    fetchStarWars: fetchStarWarsPlanet,
    data,
    setData,
    title,
  };
  const { children } = props;
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
