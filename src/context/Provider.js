import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchPlanets from '../services/fetchPlanetsAPI';

function Provider(props) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetchPlanets().then((response) => setData(response));
  }, []);

  const context = {
    data,
  };
  const { children } = props;
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
