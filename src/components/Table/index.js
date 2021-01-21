import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';
import './table.css';

function Table() {
  const {
    data,
    // dataKeys,
    filters: { filterByName: { name } },
  } = useContext(StarWarsContext);

  const ZERO = 0;

  if (data.length === ZERO) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).filter((key) => key !== 'residents').map((info) => (
              <th key={ info }>{info}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          { data.filter((planet) => planet.name.toLowerCase().includes(name))
            .map((planet) => (
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
