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
    order: {
      column: 'name',
      sort: 'ASC',
    },
    nFilters: [],
  });

  const getPlanetsAPI = async () => {
    const newData = await starWarsApi();
    const zero = 0;
    const one = 1;
    const negative = -1;

    newData.sort((a, b) => {
      if (a.name > b.name) {
        return one;
      }
      if (a.name < b.name) {
        return negative;
      }
      return zero;
    });

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
  }, [filter.nFilters.length]);

  const filterDataByName = (event) => {
    const { value } = event.target;
    setFilter({
      ...filter,
      filterByName: {
        name: value,
      },
    });
  };

  const filterDataByNumericValues = () => {
    setFilter({
      ...filter,
      nFilters: [...filter.nFilters, filtersValue],
    });
  };

  const removeFilterDataByNumericValues = (e) => {
    const { nFilters } = filter;
    setFilter({
      ...filter,
      nFilters: [...nFilters.filter((fil) => fil.column !== e.target.value)],
    });
  };

  const changeValuesToState = (event) => {
    const { value, name } = event.target;
    setFilters({ ...filtersValue, [name]: value });
  };

  const changeSortValuesToState = (event) => {
    const { value, name } = event.target;
    setFilter({
      ...filter,
      order: { ...filter.order, [name]: value },
    });
  };

  const setOrder = (firstElement, secondElement) => {
    const { column, sort } = filter.order;
    function desc(a, b) {
      return parseFloat(b) - parseFloat(a);
    }
    function asc(a, b) {
      return parseFloat(a) - parseFloat(b);
    }
    if (sort === 'ASC') {
      return asc(firstElement[column], secondElement[column]);
    }
    return desc(firstElement[column], secondElement[column]);
  };

  const context = {
    data,
    filter,
    filterDataByName,
    filterDataByNumericValues,
    changeValuesToState,
    removeFilterDataByNumericValues,
    changeSortValuesToState,
    setOrder,
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
