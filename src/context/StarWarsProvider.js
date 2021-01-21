import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import StarWarsContext from './StarWarsContext';
import RequestApi from '../services/RequestApi';

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState();
  useEffect(() => {
    async function returnApi() {
      const { results } = await RequestApi();
      console.log(results);
      setData(results);
    }
    returnApi();
  }, []);
  const context = {
    data,
    setData,
  };
  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.shape(PropTypes.object).isRequired,
};

export default StarWarsProvider;
