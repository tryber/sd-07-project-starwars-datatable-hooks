import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import planetsAPI from '../services/planetsAPI';

const Table = () => {
  const { data, setData } = useContext(StarWarsContext);
  const { filters, setFilters } = useContext(StarWarsContext);
  const [filteredByName, setFilteredByName] = useState(false);
  const [filteredByNum, setFilteredByNum] = useState(false);

  useEffect(() => {
    planetsAPI().then((r) => setData(r));
  }, [setData]);

  useEffect(() => {
    console.log(filters);
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
  }, [filteredByName, filteredByNum, filters, filters.filterByName.name]);

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
      processedPl.population = parseFloat(planet.population);
      processedPl.rotation_period = parseFloat(planet.rotation_period);
      processedPl.orbital_period = parseFloat(planet.orbital_period);
      processedPl.surface_water = parseFloat(planet.surface_water);
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
      return planets
        .filter((planet) => planet.diameter > 10000)
        .map(tableStructure);
      // const f = filters.filterByNumericValues[filters.filterByNumericValues.length - 1];
      // const { value } = filters.filterByNumericValues;
      // let filteredPlanets = [];
      // switch (f.column) {
      // case 'population':
      //   switch (f.comparison) {
      //   case 'maior que':
      //     filteredPlanets = data.filter((planet) => planet.population > value);
      //     return filteredPlanets;
      //   case 'menor que':
      //     return console.log('pop menor que');
      //   case 'igual a':
      //     return console.log('pop maior que');
      //   default:
      //     return console.log('default');
      //   }
      // case 'orbital_period':
      //   switch (f.comparison) {
      //   case 'maior que':
      //     return console.log('op maior que');
      //   case 'menor que':
      //     return console.log('op menor que');
      //   case 'igual a':
      //     return console.log('op maior que');
      //   default:
      //     return console.log('default');
      //   }
      // case 'diameter':
      //   switch (f.comparison) {
      //   case 'maior que':
      //     return console.log('dia maior que');
      //   case 'menor que':
      //     return console.log('dia menor que');
      //   case 'igual a':
      //     return console.log('dia maior que');
      //   default:
      //     return console.log('default');
      //   }
      // case 'rotation_period':
      //   switch (f.comparison) {
      //   case 'maior que':
      //     return console.log('rp maior que');
      //   case 'menor que':
      //     return console.log('rp menor que');
      //   case 'igual a':
      //     return console.log('rp maior que');
      //   default:
      //     return console.log('default');
      //   }
      // case 'surface_water':
      //   switch (f.comparison) {
      //   case 'maior que':
      //     return console.log('sw maior que');
      //   case 'menor que':
      //     return console.log('sw menor que');
      //   case 'igual a':
      //     return console.log('sw igual a');
      //   default:
      //     return console.log('default');
      //   }
      // default:
      //   console.log('default');
      // }
      // if (filteredPlanets.length) {
      //   return filteredPlanets.map((filPlanet, i) => (
      //     <tr key={ i }>
      //       <td>{filPlanet.name}</td>
      //       <td>{filPlanet.rotation_period}</td>
      //       <td>{filPlanet.orbital_period}</td>
      //       <td>{filPlanet.diameter}</td>
      //       <td>{filPlanet.climate}</td>
      //       <td>{filPlanet.gravity}</td>
      //       <td>{filPlanet.terrain}</td>
      //       <td>{filPlanet.surface_water}</td>
      //       <td>{filPlanet.population}</td>
      //       <td>residents</td>
      //       <td>films</td>
      //       <td>{filPlanet.created}</td>
      //       {/* format dates */}
      //       <td>{filPlanet.edited}</td>
      //     </tr>));
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
