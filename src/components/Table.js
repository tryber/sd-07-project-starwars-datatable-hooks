import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { filteredPlanets } = useContext(StarWarsContext);

  return (
    <div>
      <table>
        <tr>
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

        {filteredPlanets.map((planet) => (
          <tr key={ planet.name }>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>
              {planet.orbital_period}
            </td>
            <td>
              {planet.diameter}
            </td>
            <td>
              {planet.climate}
            </td>
            <td>
              {planet.gravity}
            </td>
            <td>
              {planet.terrain}
            </td>
            <td>
              {planet.surface_water}
            </td>
            <td>
              {planet.population}
            </td>
            <td>
              {planet.films}
            </td>
            <td>
              {planet.created}
            </td>
            <td>
              {planet.edited}
            </td>
            <td>
              {planet.url}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Table;
