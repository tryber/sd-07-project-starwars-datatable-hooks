import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, pageLoading, setpageLoading, headers } = useContext(
    StarWarsContext,
  );
  const zero = 0;
  if (data.length && headers.length > zero) {
    setpageLoading(false);
  }
  return (
    <div>
      <h1>Tabela</h1>
      <table>
        <tr>
          {pageLoading
            ? null
            : headers.map((tHead) => <th key={ tHead }>{ tHead }</th>)}
        </tr>
        <tbody>
          {pageLoading
            ? 'Loading'
            : data.map((planet) => (
                <tr key={ planet.name }>
                <td data-testid="planet-name">{planet.name}</td>
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
