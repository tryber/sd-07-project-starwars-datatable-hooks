import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Table() {
  const { data, filters } = useContext(StarWarsContext);
  const { filterByName: { name } } = filters;

  const zero = 0;

  if (data.length === zero) {
    return <p>Waiting...</p>;
  }

  return (
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
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>Url</th>
        </tr>
      </thead>
      <tbody>
        { data.filter(
          (planet) => planet.name.toLowerCase().includes(name.toLowerCase()),
        ).map((planet) => {
          const { diameter, climate,
            gravity, terrain, population, created, edited, films, url } = planet;

          return (
            <tr key={ planet.name }>
              <td>{ planet.name }</td>
              <td>{ planet.rotation_period }</td>
              <td>{ planet.orbital_period }</td>
              <td>{ diameter }</td>
              <td>{ climate }</td>
              <td>{ gravity }</td>
              <td>{ terrain }</td>
              <td>{ planet.surface_water }</td>
              <td>{ population }</td>
              <td>{ created }</td>
              <td>{ edited }</td>
              <td>{ films }</td>
              <td>{ url }</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
