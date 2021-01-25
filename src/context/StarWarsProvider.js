import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import starWarsApi from '../services/StarWarsApi';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);

  const [filtersValue, setFilters] = useState({
    column: '',
    comparison: '',
    value: '',
  });

  const [filter, setFilter] = useState({
    filterByName: {
      name: '',
    },
    nFilters: [],
  });

  const getPlanetsAPI = async () => {
    const newData = await starWarsApi();
    setData(newData);
  };

  const filterDataButton = () => {
    const { nFilters } = filter;
    const i = nFilters.length - 1;
    const zero = 0;
    if (i >= zero) {
      switch (nFilters[i].comparison) {
      case 'menor que':
        setData(data
          .filter((planet) => (
            parseFloat(planet[nFilters[i].column]) < parseFloat(nFilters[i].value)
          )));
        break;
      case 'maior que':
        setData(data
          .filter((planet) => (
            parseFloat(planet[nFilters[i].column]) > parseFloat(nFilters[i].value)
          )));
        break;
      case 'igual a':
        setData(data
          .filter((planet) => (
            parseFloat(planet[nFilters[i].column]) === parseFloat(nFilters[i].value)
          )));
        break;
      default:
        break;
      }
    }
  };

  useEffect(() => {
    getPlanetsAPI();
  }, []);

  useEffect(() => {
    getPlanetsAPI();
    filterDataButton();
  }, [filter.nFilters.length, filterDataButton]);

  const filterDataByName = (event) => {
    const { value } = event.target;
    setFilter((prevState) => ({
      ...prevState,
      filterByName: {
        name: value,
      },
    }));
  };

  const filterDataByNumericValues = () => {
    setFilter({
      ...filter,
      nFilters: [...filter.nFilters, filtersValue],
    });
  };

  const changeValuesToState = (event) => {
    const { value, name } = event.target;
    setFilters({ ...filtersValue, [name]: value });
  };

  const removeLastFilter = () => {
    filter.nFilters.pop();
  };

  const context = {
    data,
    filter,
    filterDataByName,
    filterDataByNumericValues,
    changeValuesToState,
    removeLastFilter,
  };

  return (
    <main>
      <StarWarsContext.Provider value={ context }>
        {children}
      </StarWarsContext.Provider>
    </main>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
