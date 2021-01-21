import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import RequestAPI from '../services/RequestApi';

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState();
  useEffect(() => {
    async function callApi() {
      const { results } = await RequestAPI();
      console.log(results);
      setData(results);
    }
    callApi();
  }, []);

  const context = { data };
  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
export default StarWarsProvider;
