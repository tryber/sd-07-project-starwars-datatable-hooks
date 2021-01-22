import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function Table() {
  const { data: { planets },
    filteredPlanetsByName,
    filteredPlanetsByValue } = useContext(StarWarsContext);
  const noNull = 0;

  function getToRender() {
    if (filteredPlanetsByValue.length > noNull) {
      return filteredPlanetsByValue;
    }
    if (filteredPlanetsByName.length > noNull) {
      return filteredPlanetsByName;
    }
    return planets;
  }
  const getHeaders = () => {
    const keys = Object.keys(planets[0]);
    return keys.filter((key) => key !== 'residents');
  };

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
          {getToRender().length > noNull
          && getToRender().map((planet) => (
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
