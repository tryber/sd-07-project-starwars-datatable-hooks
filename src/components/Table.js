import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data: { planets } } = useContext(StarWarsContext);

  const getHeaders = () => {
    const keys = Object.keys(planets[0]);
    return keys.filter((key) => key !== 'residents');
  };
  const noNull = 0;

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            {planets.length > noNull && getHeaders(planets).map((header) => (
              <th
                key={ header }
              >
                { header }
              </th>))}
          </tr>
        </thead>
        <tbody>
          {planets.map((planet) => (
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
              <td>{planet.films.toString()}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
