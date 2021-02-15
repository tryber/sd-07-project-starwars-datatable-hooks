import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import planetsAPI from '../services/StarWarsAPI';

function Provider({ children }) {
  const [data, setData] = useState();

  const fetchData = async () => {
    setData(await planetsAPI());
  };

  useEffect(() => {
    fetchData();
  }, []);

  const context = {
    data,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
