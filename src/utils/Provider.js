import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';
import fetchStarWarsPlanet from '../service/StarWarsApi';
// import mockData from '../testData';

function Provider(props) {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState([]);
  const names = 'name';
  const menosUm = -1;

  const fetchStarWars = async () => {
    const { results } = await fetchStarWarsPlanet();
    const response = results.sort((a, b) => {
      if (a[names] > b[names]) {
        return 1;
      }
      return menosUm;
    });
    setData(response);
    setTitle(Object.keys(...results));
  };

  /*     const fetchStarWarsPlanet = async () => {
    const { results } = mockData;
    setData(results);
    setTitle(Object.keys(...results));
  }; */

  useEffect(() => {
    fetchStarWars();
  }, []);

  const contextStarWars = {
    data,
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
