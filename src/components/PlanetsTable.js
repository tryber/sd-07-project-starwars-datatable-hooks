import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function PlanetsTable() {
  const { response } = useContext(StarWarsContext);
  const zero = 0;
  if (response.length > zero) {
    const planetsKeys = Object.keys(response[0]);
    const keysFiltered = planetsKeys.filter((element) => (
      element !== 'residents'
    ));
    console.log(keysFiltered);
    return (
      <table>
        <tr>
          {keysFiltered.map((planetsKey) => (
            <th key={ planetsKey }>{planetsKey}</th>
          ))}
        </tr>
        {response.map((planet) => (
          <tr key={ planet }>
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
      </table>
    );
  }
  return <div>Loading...</div>;
}

export default PlanetsTable;
