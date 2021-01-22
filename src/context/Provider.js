import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchApi from '../services/starWarsApi';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const contextValue = {
    data,
  };

  useEffect(() => {
    async function fetchData() {
      const results = await fetchApi();
      setData(results);
    }
    fetchData();
  }, []);

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
