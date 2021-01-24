import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';

function Provider({ children }) {
  const [apiResults, setApiResults] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });

  const fetchApi = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const data = await response.json();
    const filteredData = data.results.map((planet) => {
      delete planet.residents;
      return planet;
    })
    setApiResults(filteredData);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const filterByName = (nameFilter) => {
    setFilters({
      ...filters,
      filterByName: { name: nameFilter },
    });
  }

  const filterByNumericValues = (numericFilter) => {
    setFilters({
      ...filters,
      filterByNumericValues: [ ...filterByNumericValues, { numericFilter }],
    });
  }

  const columns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const data = {
    apiResults,
    filters,
    columns,
    filterByName,
    filterByNumericValues,
  };

  return (
    <StarWarsContext.Provider value={ data }>
      {children}
    </StarWarsContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
