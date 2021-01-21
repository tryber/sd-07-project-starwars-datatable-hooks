import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

import getPlanets from '../services/API';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const fetchApiData = async () => {
    setIsFetching(true);
    const result = await getPlanets();
    setData(result);
    setIsFetching(false);
  };

  const handleIsFetching = (value) => {
    setIsFetching(value);
  };

  const handleData = (value) => {
    setData(value);
  };

  const contextValue = {
    isFetching,
    data,
    fetchApiData,
    handleIsFetching,
    handleData,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
