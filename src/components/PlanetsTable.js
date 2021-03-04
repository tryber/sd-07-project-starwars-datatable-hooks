import React, { useContext } from 'react';
import { PlanetContext } from '../contexts/PlanetContext';
import PlanetRow from './PlanetRow';
import headers from '../services/headers';
import { filterContext } from '../contexts/FilterContext';

function getColumnValue(planet, column) {
  switch (column) {
  case 'population':
    return planet.population;
  case 'orbital_period':
    return planet.orbital_period;
  case 'diameter':
    return planet.diameter;
  case 'rotation_period':
    return planet.rotation_period;
  case 'surface_water':
    return planet.surface_water;
  default:
    return planet;
  }
}

function filterPlanet(columnValue, comp, value) {
  switch (comp) {
  case 'maior que':
    // radix param, have to study about it yet
    // https://stackoverflow.com/questions/7818903/jslint-says-missing-radix-parameter
    return (parseInt(columnValue, 0) > value);
  case 'menor que':
    return (parseInt(columnValue, 0) < value);
  case 'igual a':
    return (columnValue === value);
  default:
    return true;
  }
}

function getNameComparison({ name }, input) {
  const lowerCasedPlanetName = name.toLowerCase();
  const lowerCasedNameFilter = input.name.toLowerCase();
  return (lowerCasedPlanetName.match(lowerCasedNameFilter));
}

function handleSorted(planets, sortFilter) {
  const { column, sort } = sortFilter.filters.order;
  const stringColumn = ['name', 'climate', 'terrain', 'films', 'url'];
  const NEG_ONE = -1;
  const ZERO = 0;
  if (stringColumn.includes(column)) {
    const sortedPlanets = planets.sort((a, b) => {
      const nameA = a[column].toLowerCase();
      const nameB = b[column].toLowerCase();
      if (sort === 'ASC') {
        if (nameA < nameB) return NEG_ONE;
        if (nameA > nameB) return 1;
        return ZERO;
      }
      if (nameA < nameB) return 1;
      if (nameA > nameB) return NEG_ONE;
      return ZERO;
    });
    return sortedPlanets;
  }
  return planets.sort((a, b) => {
    const numberA = parseInt(a[column], ZERO);
    const numberB = parseInt(b[column], ZERO);
    if (sort === 'ASC') {
      return numberA - numberB;
    }
    return numberB - numberA;
  });
}

function getPlanetsSortedByName(planets) {
  const NEG_ONE = -1;
  const ZERO = 0;
  const sortedPlanets = planets.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) return NEG_ONE;
    if (nameA > nameB) return 1;
    return ZERO;
  });
  return sortedPlanets;
}

const PlanetsTable = () => {
  const { planets } = useContext(PlanetContext);
  const { filterActions } = useContext(filterContext);
  const { filtersState, sortFilter, activeFilters } = filterActions;
  const { sorted } = sortFilter;
  const { filters } = filtersState;
  const { filterByName, filterByNumericValue } = filters;

  if (planets) {
    getPlanetsSortedByName(planets);
  }

  return planets ? (
    <table className="table">
      <thead>
        <tr>
          {headers.map((header) => (<th key={ header }>{header}</th>))}
        </tr>
      </thead>
      <tbody>
        {sorted && handleSorted(planets, sortFilter).map((planet) => {
          if (activeFilters && filterByNumericValue) {
            const { column, comparison, value } = filterByNumericValue;
            const selectedColumnValue = getColumnValue(planet, column);
            return (getNameComparison(planet, filterByName))
              && filterPlanet(selectedColumnValue, comparison, value)
              && <PlanetRow key={ planet.name } planet={ planet } />;
          }
          return (getNameComparison(planet, filterByName))
            && <PlanetRow key={ planet.name } planet={ planet } />;
        })}
        {!sorted && !activeFilters && planets.map((planet) => (
          (getNameComparison(planet, filterByName))
            && <PlanetRow key={ planet.name } planet={ planet } />
        ))}
        {!sorted && activeFilters && filterByNumericValue && planets.map((planet) => {
          const { column, comparison, value } = filterByNumericValue;
          const selectedColumnValue = getColumnValue(planet, column);
          return (getNameComparison(planet, filterByName))
            && filterPlanet(selectedColumnValue, comparison, value)
            && <PlanetRow key={ planet.name } planet={ planet } />;
        })}
      </tbody>
    </table>
  ) : (
    <p>Loading...</p>
  );
};

export default PlanetsTable;
