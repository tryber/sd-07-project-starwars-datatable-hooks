import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [pageLoading, setpageLoading] = useState(true);
  const [headers, setHeaders] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterNumber, setFilterNumber] = useState({
    column: '',
    comparison: '',
    value: '',
  });
  const [filterResults, setFilterResults] = useState([]);
  const [order, setOrder] = useState({ column: 'name',
  sort: 'asc' });

  const requestPlanetsAPI = async () => {
    const endPoint = await fetch(
      'https://swapi-trybe.herokuapp.com/api/planets/',
    );
    const response = await endPoint.json();
    const planets = await response.results.map((planet) => {
      delete planet.residents;
      return planet;
    });
    setData(planets);
    setHeaders(Object.keys(planets[0]));
  };

  useEffect(() => {
    requestPlanetsAPI();
  }, []);

  const info = {
    data,
    setData,
    pageLoading,
    setpageLoading,
    filterResults,
    setFilterResults,
    order,
    headers,
    setFilterName,
    setFilterNumber,
    setOrder,
    filters: {
      filterByName: {
        name: filterName,
      },
      numericValuesFiltered: [filterNumber],
    },
  };

  useEffect(() => {
    const negativo = -1;
    const zero = 0;
    const positivo = 1;
    const api = async () => {
      const endPoint = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const response = await endPoint.json();
      setFilterResults(response.results);
      const arrayOrder = [...response.results];
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

  return (
    <StarWarsContext.Provider value={ info }>
      { children } 
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: propTypes.node.isRequired,
};

export default Provider;
