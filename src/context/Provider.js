import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchAPI from '../API';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetchAPI().then((data) => (setPlanets(data.results)));
  }, []);

  const context = {
    planets,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
