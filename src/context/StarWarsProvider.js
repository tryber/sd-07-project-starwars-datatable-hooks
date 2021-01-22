import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import RequestApi from '../services/RequestApi';

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState();
  const [filter, setFilter] = useState({
    filters: {
      filterByName: { name: undefined },
      filterByNumericValues: {
        column: null,
        comparison: 'maior que',
        value: undefined,
      },
    } });

  function filterByNames({ target: { value, name } }) {
    setFilter({
      ...filter,
      filters: {
        ...filter.filters,
        filterByName: {
          [name]: value,
        },
      },
    });
  }

  useEffect(() => {
    async function callApi() {
      const { results } = await RequestApi();
      setData(results);
    }
    callApi();
  }, []);

  const context = {
    data,
    filter,
    setData,
    setFilter,
    filterByNames,
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
