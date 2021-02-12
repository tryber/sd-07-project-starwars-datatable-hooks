import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function TablePlanets() {
  const getPlanetsStateGlobal = useContext(StarWarsContext);
  const { data, filters: { value } } = getPlanetsStateGlobal;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Climate</th>
            <th>Created</th>
            <th>Diameter</th>
            <th>Edited</th>
            <th>Filmes</th>
            <th>Gravity</th>
            <th>Orbital_Period</th>
            <th>Population</th>
            <th>Rotation_Period</th>
            <th>Surface_Water</th>
            <th>Terrean</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          { data.filter((planet) => planet.name.includes(!value ? '' : value))
            .map((planet) => (
              <tr key={ planet.name }>
                <td data-testid="planet-name">{ planet.name }</td>
                <td>{ planet.climate }</td>
                <td>{ planet.created }</td>
                <td>{ planet.diameter }</td>
                <td>{ planet.edited }</td>
                <td>{ planet.films.length }</td>
                <td>{ planet.gravity }</td>
                <td>{ planet.orbital_period }</td>
                <td>{ planet.population }</td>
                <td>{ planet.rotation_period }</td>
                <td>{ planet.surface_water }</td>
                <td>{ planet.terrain }</td>
                <td>{ planet.url }</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablePlanets;
