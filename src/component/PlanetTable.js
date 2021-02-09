import React, { useState, useEfffect, useContext } from 'react';

import StarWarsContext from '../context/starWarsContext';

function PlanetTable() {
  const { filterPlanets } = useContext(StarWarsContext);
  // console.log(filterPlanets);
  // if (filterPlanets.length === 0) {
  //   return 'loading';
  // }
  return (
    // <div>
      // <p>Planetas</p>
      <table>
        <thead>
          <tr role='row'>
            <th>Name</th>
            <th>rotation_period</th>
            <th>orbital_period</th>
            <th>diameter</th>
            <th>climate</th>
            <th>gravity</th>
            <th>terrain</th>
            <th>surface_water</th>
            <th>population</th>
            <th>films</th>
            <th>created</th>
            <th>edited</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
          {filterPlanets.map((planet) => (
            <tr key={planet.name} role='row'>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    // </div>
  );
}

export default PlanetTable;
