import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const initialStateFilter = {
  filterByName: { name: '' },
  filterByNumericValues: [],
  filterNumeric: false,
};

const StarWarsProvider = ({ children }) => {
  const [data, setPlanets] = useState({});
  const [copyData, setCopyData] = useState({});
  const [filters, setFilters] = useState(initialStateFilter);
  const [planetsError, setPlanetsError] = useState(false);
  const [planetsLoaded, setPlanetsLoaded] = useState(false);
  const [tableHeader, setTableHeader] = useState([]);

  async function fetchData() {
    const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

    await fetch(endpoint)
      .then((response) => (
        response.json()
          .then((json) => {
            const { results } = json;
            if (response.ok) {
              results.map((item) => delete item.residents);
              setPlanets(results);
              setCopyData(results);
              setTableHeader(Object.keys(results[0]));
            } else {
              setPlanetsError(results);
            }
            setPlanetsLoaded(true);
          })
      ));
  }

  useEffect(() => {
    fetchData();
  }, []);

  function applyFilters(column, comparison, value) {
    setFilters({
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        { column, comparison, value }],
      filterNumeric: true });
    let newData;
    if (comparison === 'maior que') {
      newData = copyData
        .filter((planet) => parseInt(planet[column], 10) > parseInt(value, 10));
    } else if (comparison === 'menor que') {
      newData = copyData
        .filter((planet) => parseInt(planet[column], 10) < parseInt(value, 10));
    } else {
      newData = copyData.filter(
        (planet) => parseInt(planet[column], 10) === parseInt(value, 10),
      );
    }
    setCopyData(newData);
  }

  function reapplyFilters() {
    const { filterByNumericValues } = filters;
    console.log(filterByNumericValues);
    let newData;

    filterByNumericValues.forEach(({ column, comparison, value }) => {
      if (comparison === 'maior que') {
        newData = copyData
          .filter((planet) => parseInt(planet[column], 10) > parseInt(value, 10));
      } else if (comparison === 'menor que') {
        newData = copyData
          .filter((planet) => parseInt(planet[column], 10) < parseInt(value, 10));
      } else {
        newData = copyData.filter(
          (planet) => parseInt(planet[column], 10) === parseInt(value, 10),
        );
      }
    });

    if (newData) setCopyData(newData);
  }

/*   useEffect(() => {
    setCopyData(data);
  }, [filters]); */

  const context = {
    data,
    setPlanets,
    copyData,
    setCopyData,
    planetsError,
    planetsLoaded,
    fetchData,
    filters,
    setFilters,
    applyFilters,
    reapplyFilters,
    tableHeader };

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
};

export { StarWarsContext as Context, StarWarsProvider as Provider };

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
