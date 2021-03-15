import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { dataFilter, dataHeader } = useContext(StarWarsContext);

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            {dataHeader.map((item, index) => (
              <th key={ index }>{item}</th>
            ))}
          </tr>
        </thead>
        {dataFilter.map((planet, index) => (

          <tbody key={ index }>
            <tr>
              <td data-testid="planet-name">{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films.map((movie) => movie)}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default Table;
