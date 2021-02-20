import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import starWarsApi from '../services/API';

function PlanetProvider({ children }) {
  const [planetsData, setPlanetsData] = useState([]);
  const [filters, setFilter] = useState({
    filterByName: { name: '' },
    filterValues: [],
    order: {
      columns: 'name',
      sort: 'ASC',
    },
    columnToGrab: [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ],
  });

  const zero = 0;

  const getPlanetsAPI = async () => {
    const newData = await starWarsApi();
    const one = 1;
    const negative = -1;

    newData.sort((a, b) => {
      if (a.name > b.name) {
        return one;
      }
      if (a.name < b.name) {
        return negative;
      }
      return zero;
    });

    setPlanetsData(newData);
  };

  useEffect(() => {
    getPlanetsAPI();
  }, [filters]);

  // Referencia a lógica criada pelo Bruno Wesley
  const planetsFilter = () => {
    const findBiggestPlanet = (column, number) => (
      parseInt(column, 10) > parseInt(number, 10)
    );
    const findSmalllestPlanet = (column, number) => (
      parseInt(column, 10) < parseInt(number, 10)
    );
    const findSameSizePlanet = (column, number) => (
      parseInt(column, 10) === parseInt(number, 10)
    );

    const nameFilter = (allPlanets) => (
      allPlanets.filter((planetName) => planetName
        .name.includes(filters.filterByName.name))
    );

    const comparingPlanets = (planetName, tableColumn, comparison, value) => {
      const comparing = {
        'maior que': findBiggestPlanet(planetName[tableColumn], value),
        'menor que': findSmalllestPlanet(planetName[tableColumn], value),
        'igual a': findSameSizePlanet(planetName[tableColumn], value),
      };
      return comparing[comparison];
    };

    const filterByValues = (allPlanets) => {
      const { filterValues } = filters;
      if (filterValues.length === zero) {
        return allPlanets;
      }
      return allPlanets.filter((planetName) => (filterValues.every((filter) => (
        comparingPlanets(
          planetName,
          filter.column,
          filter.comparison,
          filter.value, filter,
        )
      ))));
    };
    const filteredByPlanetName = nameFilter(planetsData);
    const filteredByNumericValue = filterByValues(filteredByPlanetName);

    return filteredByNumericValue;
  };

  const changeSortValues = (event) => {
    const { value, name } = event.target;
    setFilter({
      ...filters,
      order: { ...filters.order, [name]: value },
    });
  };

  // Referencia ao método de ordenação utilizado pelo Cezar Augusto
  const setOrder = (firstElement, secondElement) => {
    const { column, sort } = filters.order;
    function desc(a, b) {
      return parseFloat(b) - parseFloat(a);
    }
    function asc(a, b) {
      return parseFloat(a) - parseFloat(b);
    }
    if (sort === 'ASC') {
      return asc(firstElement[column], secondElement[column]);
    }
    return desc(firstElement[column], secondElement[column]);
  };

  const planetContext = {
    planetsData,
    filters,
    setFilter,
    planetsFilter,
    changeSortValues,
    setOrder,
  };

  return (
    <StarWarsContext.Provider value={ planetContext }>
      {children}
    </StarWarsContext.Provider>
  );
}

PlanetProvider.propTypes = { children: PropTypes.node.isRequired };

export default PlanetProvider;
