import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import api from '../services/api';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '100000',
      },
    ],
  });
  const [startFilters, setStartFilters] = useState({});

  const { filterByNumericValues } = filters;
  // const { column, comparison, value } = filters.filterByNumericValues[0]
  // console.log('filters:', filters.filterByNumericValues)

  const starWarsPlanets = async () => {
    const { results } = await api();
    setData(results);
  };

  useEffect(() => {
    starWarsPlanets();
  }, []);

  const handleFilterChange = (e) => {
    const inputValue = e.target.value;
    setFilters({
      ...filters,
      filterByName: { name: inputValue },
      ...filterByNumericValues,
    });
  };

  const handleFilterByNumericValues = (column, newValue) => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        {
          ...filterByNumericValues[0],
          [column]: newValue,
        },
      ],
    });
  };

  const handleInputFilterByNumericValues = (e) => {
    const inputValue = e.target.value;
    setFilters({
      ...filters,
      filterByNumericValues: [
        {
          ...filterByNumericValues[0],
          value: inputValue,
        },
      ],
    });
  };

  const handleButton = () => {
    setStartFilters({
      ...startFilters,
      ...filters.filterByNumericValues[0],
    });
  };

  const activateFilters = () => {
    const { column, comparison, value } = startFilters;
    let starPlanets = data;
    if (comparison === 'maior que') {
      starPlanets = starPlanets.filter(
        (item) => parseFloat(item[column]) > parseFloat(value),
      );
    } else if (comparison === 'menor que') {
      starPlanets = starPlanets.filter(
        (item) => parseFloat(item[column]) < parseFloat(value),
      );
    } else if (comparison === 'igual a') {
      starPlanets = starPlanets.filter(
        (item) => parseFloat(item[column]) === parseFloat(value),
      );
    }
    return starPlanets;
  };

  const context = { data,
    handleFilterChange,
    filters,
    handleFilterByNumericValues,
    handleInputFilterByNumericValues,
    handleButton,
    activateFilters,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default StarWarsProvider;
