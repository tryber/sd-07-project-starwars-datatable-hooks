import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import planetsAPI from '../services/planetsAPI';

const Table = () => {
  const { data, setData } = useContext(StarWarsContext);
  const { filters, setFilters } = useContext(StarWarsContext);
  const { filteredByName, setFilteredByName } = useContext(StarWarsContext);
  const { filteredByNum, setFilteredByNum } = useContext(StarWarsContext);

  useEffect(() => {
    planetsAPI().then((r) => setData(r));
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
  }, [filteredByName, filteredByNum, filters, filters.filterByName.name, setFilteredByName, setFilteredByNum]);

  const tableStructure = (planet, i) => (
    <tr key={ i }>
      <td>{planet.name}</td>
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
    console.log(newPl);
    return newPl;
  };

  const setTable = () => {
    if (filteredByName) {
      const filteredPlanets = data.filter((planet) => (
        planet.name.includes(filters.filterByName.name)
      ));
      return filteredPlanets.length ? filteredPlanets.map((filPlanet, i) => (
        <tr key={ i }>
          <td>{filPlanet.name}</td>
          <td>{filPlanet.rotation_period}</td>
          <td>{filPlanet.orbital_period}</td>
          <td>{filPlanet.diameter}</td>
          <td>{filPlanet.climate}</td>
          <td>{filPlanet.gravity}</td>
          <td>{filPlanet.terrain}</td>
          <td>{filPlanet.surface_water}</td>
          <td>{filPlanet.population}</td>
          <td>residents</td>
          <td>films</td>
          <td>{filPlanet.created}</td>
          {/* format dates */}
          <td>{filPlanet.edited}</td>
        </tr>)) : null;
    } if (filteredByNum) {
      const planets = parseToFloat();
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
