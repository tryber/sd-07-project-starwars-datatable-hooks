import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import planetApi from '../services/planetApi';

function Provider({ children }) {
  const [data, setPlanets] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const RequestAPI = async () => {
    setPlanets(await planetApi());
    setIsFetching(false);
  };

  const context = {
    data,
    isFetching,
  };

  useEffect(() => {
    RequestAPI();
  }, []);

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Provider;
