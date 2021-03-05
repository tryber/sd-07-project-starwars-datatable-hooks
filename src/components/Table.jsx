import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import planetsAPI from '../services/planetsAPI';

const Table = () => {
  const { data, setData } = useContext(StarWarsContext);
  const { filters } = useContext(StarWarsContext);
  const { filteredByName, setFilteredByName } = useContext(StarWarsContext);
  const { filteredByNum, setFilteredByNum } = useContext(StarWarsContext);
  const { sorted, setSorted } = useContext(StarWarsContext);

  const sortArray = (a, b) => {
    const minusOne = -1;
    const zero = 0;
    if (a.name < b.name) {
      return minusOne;
    }
    if (a.name > b.name) {
      return 1;
    }
    return zero;
  };

  useEffect(() => {
    planetsAPI().then((r) => {
      r.sort(sortArray);
      setData(r);
    });
  }, [setData]);

  useEffect(() => {
    if (filters.filterByName.name !== '') {
      setFilteredByName(true);
    } else {
      setFilteredByName(false);
    }
    if (filters.filterByNumericValues.length) {
      setFilteredByNum(true);
    } else {
      setFilteredByNum(false);
    }
    console.log(filteredByName, filteredByNum);
  }, [
    filteredByName,
    filteredByNum,
    filters,
    filters.filterByName.name,
    setFilteredByName, setFilteredByNum]);

  const tableStructure = (planet, i) => (
    <tr key={ i }>
      <td data-testid="planet-name">{planet.name}</td>
      <td>{planet.rotation_period}</td>
      <td>{planet.orbital_period}</td>
      <td>{planet.diameter}</td>
      <td>{planet.climate}</td>
      <td>{planet.gravity}</td>
      <td>{planet.terrain}</td>
      <td>{planet.surface_water}</td>
      <td>{planet.population}</td>
      <td>residents</td>
      <td>films</td>
      <td>{planet.created}</td>
      {/* format dates */}
      <td>{planet.edited}</td>
    </tr>
  );

  const parseToFloat = () => {
    const newPl = data.map((planet) => {
      const processedPl = planet;
      processedPl.diameter = parseFloat(planet.diameter);
      processedPl.population = planet.population === 'unknown'
        ? 'unknown'
        : parseFloat(planet.population);
      processedPl.rotation_period = parseFloat(planet.rotation_period);
      processedPl.orbital_period = parseFloat(planet.orbital_period);
      processedPl.surface_water = planet.surface_water === 'unknown'
        ? 'unknown'
        : parseFloat(planet.surface_water);
      return processedPl;
    });
    return newPl;
  };

  const setTable = () => {
    if (filteredByName) {
      const filteredPlanets = data.filter((planet) => (
        planet.name.includes(filters.filterByName.name)
      ));
      return filteredPlanets.length ? filteredPlanets.map(tableStructure) : null;
    } if (filteredByNum && filters.filterByNumericValues.length) {
      const planets = parseToFloat();
      console.log('filtering by num');
      const f = filters.filterByNumericValues[filters.filterByNumericValues.length - 1];
      const { column, value } = f;
      const valueInt = parseInt(value, 10);
      switch (f.comparison) {
      case 'maior que':
        return planets
          .filter((planet) => planet[column] > valueInt)
          .map(tableStructure);
      case 'menor que':
        return planets
          .filter((planet) => planet[column] < valueInt)
          .map(tableStructure);
      case 'igual a':
        return planets
          .filter((planet) => planet[column] === valueInt)
          .map(tableStructure);
      default:
        return null;
      }
    } if (sorted) {
      const { column, sort } = filters.order;

      const sortedPlanets = sort === 'ASC'
        ? data.sort((planetA, planetB) => {
          const minusOne = -1;
          const zero = 0;
          if (planetA[column] < planetB[column]) {
            return minusOne;
          }
          if (planetA[column] > planetB[column]) {
            return 1;
          }
          return zero;
        })
        : data.sort((planetA, planetB) => {
          const minusOne = -1;
          const zero = 0;
          if (planetA[column] > planetB[column]) {
            return minusOne;
          }
          if (planetA[column] < planetB[column]) {
            return 1;
          }
          return zero;
        });
      return sortedPlanets.map(tableStructure);
    }

    return data.map(tableStructure);
  };

  useEffect(() => {
    setTable();
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Residents</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
          </tr>
        </thead>
        <tbody>
          {setTable()}
        </tbody>

      </table>
    </div>
  );
};

export default Table;
