import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RequestData from '../services/RequestData';
import StarWarsContext from '../context';

const Provider = ({ children }) => {
  const filterInitial = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '0',
      },
    ],
  };
  const [data, setData] = useState();
  const [filters, setFilters] = useState(filterInitial);

  const changeFiltersName = (name) => {
    const newFilter = {
      ...filters,
      filterByName: { name },
    };
    setFilters(newFilter);
  };

  const changeFiltersNumerics = (column, comparison, value) => {
    const newFilter = {
      ...filters,
      filterByNumericValues: [{
        column,
        comparison,
        value,
      }],
    };
    setFilters(newFilter);
  };

  const callRequestData = async () => {
    const { results } = await RequestData();
    setData(results);
  };

  useEffect(() => {
    callRequestData();
  }, []);

  const context = {
    data,
    filters,
    // setData,
    changeFiltersName,
    changeFiltersNumerics,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
