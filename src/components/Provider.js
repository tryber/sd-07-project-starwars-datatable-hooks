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
    const { columnFilter, comparisonFilter, valueFilter } = filter;
    console.log(filter);
    const number = parseInt(valueFilter, 10);
    if (comparisonFilter === 'maior que') {
      console.log('maiorQue', Number(planet[columnFilter]));
      return Number(planet[columnFilter]) > number;
    }
    if (comparisonFilter === 'menor que') {
      console.log('menorQue', Number(planet[columnFilter]));
      return Number(planet[columnFilter]) < number;
    }
    if (comparisonFilter === 'igual a') {
      console.log('igualA', Number(planet[columnFilter]));
      return Number(planet[columnFilter]) === number;
    }
  };

  useEffect(() => {
    let numericFiltered = Array.from(apiResults);
    console.log(numericFiltered);
    filters.filterByNumericValues.forEach((filter) => {
      numericFiltered = numericFiltered
        .filter((planet) => filterComparison(planet, filter));
    });
    console.log(numericFiltered);
    if (filters.filterByName.name !== '') {
      const filtered = numericFiltered
        .filter((planet) => planet.name.includes(filters.filterByName.name));
        setfilteredPlanets(filtered);
    }
    else {
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
