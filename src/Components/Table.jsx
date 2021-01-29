import React, { useContext } from 'react';
import StarWarsContext from '../Provider/StarWarsContext';

function Table() {
  const { data, filter } = useContext(StarWarsContext);
  console.log(filter);
  const size = 0;
  const tableHead = (words) => Object.keys(words).filter((acc) => acc !== 'residents');
  return (
    <table>
      <thead>
        <tr className="header">
          {
            data.length === size
              ? 'Loadin...' : tableHead(data[0])
                .map((acc) => <th key={ acc }>{ acc }</th>)
          }
        </tr>
      </thead>
      <tbody>
        {
          filter.length === size
            ? 'Loadin...' : filter.map((acc) => (
              <tr key={ acc.name }>
                <td>{acc.name}</td>
                <td>{acc.rotation_period}</td>
                <td>{acc.orbital_period}</td>
                <td>{acc.diameter}</td>
                <td>{acc.climate}</td>
                <td>{acc.gravity}</td>
                <td>{acc.terrain}</td>
                <td>{acc.surface_water}</td>
                <td>{acc.population}</td>
                <td>{acc.films}</td>
                <td>{acc.created}</td>
                <td>{acc.edited}</td>
                <td>{acc.url}</td>
              </tr>
            ))
        }
      </tbody>
    </table>
  );
}

export default Table;
