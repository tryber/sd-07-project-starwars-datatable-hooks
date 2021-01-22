import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getPlanet from '../services/starWarsAPI';

const StarWarsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoaing] = useState(true);

  async function handlePlants() {
    const recivedPlnets = await getPlanet();
    setPlanets(recivedPlnets);
    setLoaing(false);
  }

  useEffect(() => {
    handlePlants();
  }, []);

  const state = {
    planets,
    isLoading: loading,
  };
  return (
    <StarWarsContext.Provider value={ state }>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
