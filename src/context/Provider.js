import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

// import api from '../services/api';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterResults, setFilterResults] = useState([]);
  const [filterByNumericValues, setFilterByNumericValues] = useState({
    column: '', comparison: '', value: '' });
  const [resultsPlanets, setResultsPlanets] = useState([]);

  useEffect(() => {
    const api = async () => {
      const apiUrl = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const url = await apiUrl.json();
      setData(url.results);
      setFilterResults(url.results);
    };
    api();
  }, []);

  // linhas 25 a 28 codigo de Erick Vini
  useEffect(() => {
    const filterInput = data.filter(({ name }) => name.includes(filterName));
    setFilterResults(filterInput);
  }, [data, filterName]);

  useEffect(() => {
    let filterInput;
    const { column, comparison, value } = filterByNumericValues;
    if (column !== '') {
      switch (comparison) {
      case 'maior que':
        filterInput = data
          .filter((planet) => parseFloat(planet[column]) > parseFloat(value));
        break;
      case 'menor que':
        filterInput = data
          .filter((planet) => parseFloat(planet[column]) < parseFloat(value));
        break;
      default:
        filterInput = data
          .filter((planet) => parseFloat(planet[column]) === parseFloat(value));
      }
      setFilterResults(filterInput);
    }
  }, [data, filterByNumericValues]);

  return (
    <StarWarsContext.Provider
      value={ {
        data,
        filterName,
        setFilterName,
        filterResults,
        setFilterResults,
        setFilterByNumericValues,
        resultsPlanets,
        setResultsPlanets,
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
