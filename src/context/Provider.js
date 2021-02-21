import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

// import api from '../services/api';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterResults, setFilterResults] = useState([]);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [resultsPlanets, setResultsPlanets] = useState([]);

  // const [order, setOrder] = useState({ column: 'Name',
  // sort: 'ASC' });

  useEffect(() => {
    const api = async () => {
      const apiUrl = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const url = await apiUrl.json();
      setData(url.results);
      setFilterResults(url.results);
    };
    api();
  }, []);

  // linhas 25 a 28 Referencia: Erick Vini
  useEffect(() => {
    const filterInput = data.filter(({ name }) => name.includes(filterName));
    setFilterResults(filterInput);
  }, [data, filterName]);

  useEffect(() => {
    let filterInput = [...data];
    filterByNumericValues.forEach(({ column, comparison, value }) => {
      if (column !== '') {
        switch (comparison) {
        case 'maior que':
          filterInput = filterInput
            .filter((planet) => parseFloat(planet[column]) > parseFloat(value));
          break;
        case 'menor que':
          filterInput = filterInput
            .filter((planet) => parseFloat(planet[column]) < parseFloat(value));
          break;
        default:
          filterInput = filterInput
            .filter((planet) => parseFloat(planet[column]) === parseFloat(value));
        }
      }
    });
    setFilterResults(filterInput);
  }, [data, filterByNumericValues]);

  // useEffect(() => {
  //   const filterOrder = [...filterResults].sort((a, b) => {
  //     if (a[order.column] > b[order.column]) {
  //       return order.sort === 'ASC' ? 1: -1;
  //     }
  //     if (a[order.column] < b[order.column]) {
  //       return order.sort === 'ASC' ? -1: 1;
  //     }
  //     return 0;
  //   });
  //   setFilterResults(filterOrder);
  // }, [filterResults, order]);

  return (
    <StarWarsContext.Provider
      value={ {
        data,
        filterName,
        setFilterName,
        filterResults,
        setFilterResults,
        filterByNumericValues,
        setFilterByNumericValues,
        resultsPlanets,
        setResultsPlanets,
        // setOrder,
      } }
    >
      { children }
    </StarWarsContext.Provider>
  );
}
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
