import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterResults, setFilterResults] = useState([]);
  const [numericValuesFiltered, setnumericValuesFiltered] = useState([]);
  const [resultsPlanets, setResultsPlanets] = useState([]);

  const [order, setOrder] = useState({ column: 'name',
    sort: 'asc' });

  useEffect(() => {
    const negativo = -1;
    const zero = 0;
    const positivo = 1;
    const api = async () => {
      const apiUrl = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const url = await apiUrl.json();
      setFilterResults(url.results);
      const arrayOrder = [...url.results];
      arrayOrder.sort((a, b) => {
        if (a.name > b.name) return positivo;
        if (a.name < b.name) return negativo;
        return zero;
      });
      setData(arrayOrder);
    };
    api();
  }, []);

  useEffect(() => {
    const filterInput = data.filter(({ name }) => name.includes(filterName));
    setFilterResults(filterInput);
  }, [data, filterName]);

  useEffect(() => {
    let filterInput = [...data];
    numericValuesFiltered.forEach(({ column, comparison, value }) => {
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
  }, [data, numericValuesFiltered]);

  return (
    <StarWarsContext.Provider
      value={ {
        data,
        setData,
        filterName,
        setFilterName,
        filterResults,
        setFilterResults,
        numericValuesFiltered,
        setnumericValuesFiltered,
        resultsPlanets,
        setResultsPlanets,
        order,
        setOrder,
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
