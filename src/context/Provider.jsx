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
    pageLoading,
    setpageLoading,
    headers,
    setFilterName,
    setFilterNumber,
    filters: {
      filterByName: {
        name: filterName,
      },
      numericValuesFiltered: [filterNumber],
    },
  };

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
