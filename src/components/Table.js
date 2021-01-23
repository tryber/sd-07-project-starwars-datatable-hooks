import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data } = useContext(StarWarsContext);

  return (
    <div>
      <table>
        <tr>
          <td>name</td>
          <td>rotation_period</td>
          <td>orbital_period</td>
          <td>diameter</td>
          <td>climate</td>
          <td>gravity</td>
          <td>terrain</td>
          <td>surface_water</td>
          <td>population</td>
          <td>residents</td>
          <td>films</td>
          <td>created</td>
          <td>edited</td>
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
            <td>{planet.residents}</td>
            <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
          </tr>))}
      </table>
    </div>
  );
}

export default Table;

// "name": "Tatooine",
//             "rotation_period": "23",
//             "orbital_period": "304",
//             "diameter": "10465",
//             "climate": "arid",
//             "gravity": "1 standard",
//             "terrain": "desert",
//             "surface_water": "1",
//             "population": "200000",
//             "residents":
