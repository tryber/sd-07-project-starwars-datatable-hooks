import React, { useState } from 'react';
import PropTypes from 'prop-types';

import fetchAPI from '../services';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [dataIsEmpty, setDataIsEmpty] = useState(true);

  const fetchPlanets = async () => {
    setLoading(true);
    const { results } = await fetchAPI();
    setData(results);
    setLoading(false);
    setDataIsEmpty(false);
  };

  const contextValue = {
    fetchPlanets,
    isLoading,
    setLoading,
    data,
    setData,
    dataIsEmpty,
  };

  return (
    <StarWarsContext.Provider value={ { ...contextValue } }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default StarWarsProvider;
