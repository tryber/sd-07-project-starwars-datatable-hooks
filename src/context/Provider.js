import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import starwarsAPI from '../services/starwarsAPI';

function Provider({ children }) {
  const [planetsStarWars, setPlanetsStarWars] = useState([]);
  const [isFetching, setFetching] = useState(true);
  const [filterPlanets, setfilterPlanets] = useState([]);
  const [filters, setFilters] = useState([]);
  const [orderColumns, setOrderColumns] = useState({
    column: 'name',
    sort: 'ASC',
  });

  // Compares pegos no stackoverflow
  const compare = (a, b) => {
    const { column } = orderColumns;
    const menosum = -1;
    const zero = 0;
    if (column === 'name') {
      if (a[column].charCodeAt() < b[column].charCodeAt()) {
        return menosum;
      }
      if (a[column].charCodeAt() > b[column].charCodeAt()) {
        return 1;
      }
      return zero;
    }
    return parseFloat(a[column]) - parseFloat(b[column]);
  };

  const compareDesc = (a, b) => {
    const { column } = orderColumns;
    const menosum = -1;
    const zero = 0;
    if (column === 'name') {
      if (a[column] > b[column]) {
        return menosum;
      }
      if (a[column] < b[column]) {
        return 1;
      }
      return zero;
    }
    return parseFloat(b[column]) - parseFloat(a[column]);
  };

  const orderTable = () => {
    const { sort } = orderColumns;
    switch (sort) {
    case 'ASC':
      setPlanetsStarWars((previous) => [...previous].sort((a, b) => compare(a, b)));
      break;
    case 'DESC':
      setPlanetsStarWars((previous) => [...previous].sort((a, b) => compareDesc(a, b)));
      break;
    default:
      break;
    }
  };

  const fetchPlanets = async () => {
    if (!isFetching) return;

    await setFetching(() => false);

    await starwarsAPI().then((response) => {
      setPlanetsStarWars(() => response.results);
      setfilterPlanets(() => response.results);
    });
  };

  const deleteFilter = (index) => {
    setPlanetsStarWars(filterPlanets);
    const newFilter = filters.slice();
    newFilter.splice(index, 1);
    setFilters(newFilter);
  };

  const getFilters = () => {
    const zero = 0;
    if (filters.length === zero) return undefined;
    filters.forEach((filter) => {
      const { column, comparison, value } = filter;
      if (comparison === 'maior que') {
        setPlanetsStarWars(() => planetsStarWars
          .filter((planet) => parseInt(planet[column], 0) > parseInt(value, 0)));
      } else if (comparison === 'menor que') {
        setPlanetsStarWars(() => planetsStarWars
          .filter((planet) => parseInt(planet[column], 0) < parseInt(value, 0)));
      } else if (comparison === 'igual a') {
        setPlanetsStarWars(() => planetsStarWars
          .filter((planet) => parseInt(planet[column], 0) === parseInt(value, 0)));
      }
    });
  };

  useEffect(() => {
    getFilters();
    orderTable();
  }, [filters, orderColumns, filterPlanets]);

  async function searchPlanets(value) {
    if (value === '') {
      setPlanetsStarWars(() => filterPlanets);
      orderTable();
    }

    const filter = filterPlanets
      .filter((planet) => planet.name.includes(value));
    setPlanetsStarWars(() => filter);
    orderTable();
  }

  const contextValue = {
    planetsStarWars,
    isFetching,
    filters,
    orderColumns,
    fetchPlanets,
    searchPlanets,
    setFilters,
    deleteFilter,
    setOrderColumns,
    orderTable,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.func.isRequired,
};
