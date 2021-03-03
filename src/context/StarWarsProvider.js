import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import fetchAPI from '../services';
import StarWarsContext from './StarWarsContext';

const default_Filter = {
  filterByName: { name: '' },
};

function StarWarsProvider({ children }) {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [dataIsEmpty, setDataIsEmpty] = useState(true);
  const [filters, setFilters] = useState(default_Filter);

  const fetchPlanets = async () => {
    setLoading(true);
    const { results } = await fetchAPI();
    setData(results);
    setLoading(false);
    setDataIsEmpty(false);
  };

  useEffect(() => {
    console.log('Request API')
    fetchPlanets();
  }, []);

  const contextValue = {
    fetchPlanets,
    isLoading,
    setLoading,
    data,
    setData,
    dataIsEmpty,
    filters,
    setFilters,
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
