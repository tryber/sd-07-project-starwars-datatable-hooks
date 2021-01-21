import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
// import './table.css';

function Table() {
  const { data } = useContext(StarWarsContext);
  console.log(data);
  const test = data.filter((planet) => planet.name === 'Naboo');
  const test2 = test.map((planet) => [...Object.keys(planet)]);
  return (
    <div>
      <table>
        <thead>
          {test2.map((info, index) => (
            <tr key={ index }>
              <th>{info[0]}</th>
              <th>{info[1]}</th>
              <th>{info[2]}</th>
              <th>{info[3]}</th>
              <th>{info[4]}</th>
              <th>{info[5]}</th>
              <th>{info[6]}</th>
              <th>{info[7]}</th>
              <th>{info[8]}</th>
              <th>{info[10]}</th>
              <th>{info[11]}</th>
              <th>{info[12]}</th>
              <th>{info[13]}</th>
            </tr>
          ))}
        </thead>
        <tbody>

          {/* { data.map((planet) =>
            Object.keys(planet).map(info => <tr>{info}</tr>)) } */}
          { data.map((planet, index) => (
            <tr key={ index }>
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
        </tbody>
      </table>
    </div>
  );
}

export default Table;
