import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function PlanetsTable() {
  const { data } = useContext(StarWarsContext);
  const ZERO = 0;
  return data.length > ZERO ? (
    <table>
      <tr>
        <th>Name</th>
        <th>Rotation Period</th>
        <th>orbitalPeriod</th>
        <th>diameter</th>
        <th>climate</th>
        <th>gravity</th>
        <th>terrain</th>
        <th>surfaceWater</th>
        <th>population</th>
        <th>films</th>
        <th>Created</th>
        <th>Edited</th>
        <th>url</th>
      </tr>
      {data.map((planet) => (
        <tr key={ planet.name }>
          <td>{planet.name}</td>
          <td>{planet.rotation_period}</td>
          <td>{planet.orbital_period}</td>
          <td>{planet.diameter}</td>
          <td>{planet.climate}</td>
          <td>{planet.gravity}</td>
          <td>{planet.terrain}</td>
          <td>{planet.surface_water}</td>
          <td>{planet.population}</td>
          <td>{planet.films[0]}</td>
          <td>{planet.created}</td>
          <td>{planet.edited}</td>
          <td>{planet.url}</td>
        </tr>
      ))}
    </table>
  )
    : (<div>Loading...</div>);
}

export default PlanetsTable;
