import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';

function Provider({ children }) {
  const [apiResults, setApiResults] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });
  const [filteredPlanets, setfilteredPlanets] = useState([]);

  const fetchApi = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const data = await response.json();
    const filteredData = data.results.map((planet) => {
      delete planet.residents;
      return planet;
    });
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
  };

  const filterByNumericValues = (numericFilter) => {
    const { filterByNumericValues: numericFilters } = filters;
    setFilters({
      ...filters,
      filterByNumericValues: [...numericFilters, numericFilter],
    });
  };

  const columns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const filterComparison = (planet, filter) => {
    const { column, comparison, value } = filter;
    const number = parseInt(value, 10);
    if (comparison === 'maior que' && !(planet[column] === 'unknown')) {
      return Number(planet[column]) > number;
    }
    if (comparison === 'menor que' && !(planet[column] === 'unknown')) {
      return Number(planet[column]) < number;
    }
    if (comparison === 'igual a' && !(planet[column] === 'unknown')) {
      return Number(planet[column]) === number;
    }
  };

  useEffect(() => {
    let numericFiltered = Array.from(apiResults);
    filters.filterByNumericValues.forEach((filter) => {
      numericFiltered = numericFiltered
        .filter((planet) => filterComparison(planet, filter));
    });
    const filtered = numericFiltered
      .filter((planet) => planet.name.includes(filters.filterByName.name));
    setfilteredPlanets(filtered);
  }, [filters, apiResults]);

  const tableData = {
    filters,
    columns,
    filterByName,
    filterByNumericValues,
    filteredPlanets,
  };

  return (
    <StarWarsContext.Provider value={ tableData }>
      {children}
    </StarWarsContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
