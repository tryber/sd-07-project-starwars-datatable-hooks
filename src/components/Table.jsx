import React, { useContext } from 'react';
import { StarWarsContext } from '../context';
import { useFilterPlanets } from '../hooks';

export default function Table() {
  const { data: { loading } } = useContext(StarWarsContext);
  const planets = useFilterPlanets();
  return (
    loading
      ? (<h1>loading...</h1>)
      : (
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>climate</th>
              <th>diameter</th>
              <th>gravity</th>
              <th>orbital_period</th>
              <th>population</th>
              <th>terrain</th>
              <th>rotation_period</th>
              <th>surface_water</th>
              <th>url</th>
              <th>films</th>
              <th>created</th>
              <th>edited</th>
            </tr>
          </thead>
          <tbody>
            {planets.map(({
              name,
              climate,
              diameter,
              gravity,
              orbital_period: orbital,
              population,
              terrain,
              rotation_period: rotation,
              surface_water: surface,
              url,
              films,
              created,
              edited,
            }, index) => (
              <tr key={ index }>
                <td>{name}</td>
                <td>{climate}</td>
                <td>{diameter}</td>
                <td>{gravity}</td>
                <td>{orbital}</td>
                <td>{population}</td>
                <td>{terrain}</td>
                <td>{rotation}</td>
                <td>{surface}</td>
                <td>{url}</td>
                <td>{films.length}</td>
                <td>{created}</td>
                <td>{edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )
  );
}
