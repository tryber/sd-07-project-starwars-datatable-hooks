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
        column: 'population',
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

  function filterByNumeric({ target: { value, name } }) {
    setFilter({
      ...filter,
      filters: {
        ...filter.filters,
        filterByNumericValues: {
          ...filter.filters.filterByNumericValues,
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
    filterByNumeric,
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
