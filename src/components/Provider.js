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

  const setFilterByNumericValues = (numericFilter) => {
    const { filterByNumericValues: numericFilters } = filters;
    const zero = 0;
    const filterColumnComparion = numericFilters
      .filter((filter) => filter.columnFilter === numericFilter.columnFilter);
    if (filterColumnComparion.length === zero) {
      setFilters({
        ...filters,
        filterByNumericValues: [...numericFilters, numericFilter],
      });
    }
  };

  const columns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const filterComparison = (planet, filter) => {
    const { columnFilter, comparisonFilter, valueFilter } = filter;
    const number = parseInt(valueFilter, 10);
    if (comparisonFilter === 'maior que' && !(planet[columnFilter] === 'unknown')) {
      return Number(planet[columnFilter]) > number;
    }
    if (comparisonFilter === 'menor que' && !(planet[columnFilter] === 'unknown')) {
      return Number(planet[columnFilter]) < number;
    }
    if (comparisonFilter === 'igual a' && !(planet[columnFilter] === 'unknown')) {
      return Number(planet[columnFilter]) === number;
    }
  };

  useEffect(() => {
    let numericFiltered = Array.from(apiResults);
    filters.filterByNumericValues.forEach((filter) => {
      numericFiltered = numericFiltered
        .filter((planet) => filterComparison(planet, filter));
    });
    if (filters.filterByName.name !== '') {
      const filtered = numericFiltered
        .filter((planet) => planet.name.includes(filters.filterByName.name));
      setfilteredPlanets(filtered);
    } else {
      setfilteredPlanets(numericFiltered);
    }
  }, [filters, apiResults]);

  const tableData = {
    filters,
    columns,
    filterByName,
    setFilterByNumericValues,
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
