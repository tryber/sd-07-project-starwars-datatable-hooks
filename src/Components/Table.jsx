import React, { useContext } from 'react';
import StarWarsContext from '../Context/StarWarsContext';

function Table() {
  const data = useContext(StarWarsContext);
  const tableHead = (words) => Object.keys(words).filter((acc) => acc !== 'residentes');
  const size = 0;
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
          data.length === size
            ? 'Loadin...' : data.map((acc) => (
              <tr key={ acc.name }>
                <td>{acc.name}</td>
                <td>{acc.climate}</td>
                <td>{acc.created}</td>
                <td>{acc.diameter}</td>
                <td>{acc.edited}</td>
                <td>{acc.films}</td>
                <td>{acc.gravity}</td>
                <td>{acc.orbital_period}</td>
                <td>{acc.population}</td>
                <td>{acc.rotation_period}</td>
                <td>{acc.surface_water}</td>
                <td>{acc.terrain}</td>
                <td>{acc.url}</td>
                {delete acc.residents}
              </tr>
            ))
        }
      </tbody>
    </table>
  );
}

export default Table;
