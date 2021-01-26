import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [dataApi, setDataApi] = useState([]);

  const [filterHandler, setFilterHandler] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  function filterNumericValues(results) {
    const numericValues = filters.filterByNumericValues;
    if (!numericValues.length) {
      return setData(results);
    }

    const value = results.filter((result) => (
      numericValues.every((numericFilter) => {
        switch (numericFilter.comparison) {
        case 'maior que':
          if (
            result[numericFilter.column]
            > parseInt(numericFilter.value, 10)
            && parseInt(numericFilter.value, 10) !== 'unknown'
          ) {
            return true;
          }
          return false;

        case 'menor que':
          if (
            result[numericFilter.column]
            < parseInt(numericFilter.value, 10)
            && parseInt(numericFilter.value, 10) !== 'unknown'
          ) {
            return true;
          }
          return false;

        case 'igual a':
          if (
            result[numericFilter.column]
            === parseInt(numericFilter.value, 10)
            && parseInt(numericFilter.value, 10) !== 'unknown'
          ) {
            return true;
          }
          return false;
        default:
          return false;
        }
      })
    ));
    setData(value);
  }

  function filterName(results) {
    const { name } = filters.filterByName;
    return results.filter(
      (result) => result.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
      || name === '',
    );
  }

  useEffect(() => {
    async function fetchData() {
      const { results } = await fetch(
        'https://swapi.dev/api/planets/',
      ).then((response) => response.json());
      results.map((planet) => delete planet.residents);
      setDataApi(results);
      setData(results);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const results = dataApi;
    const filteredName = filterName(results);
    filterNumericValues(filteredName);
  }, [filters]);

  const context = {
    data,
    setData,
    filters,
    setFilters,
    filterHandler,
    setFilterHandler,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
