import React, { useContext } from 'react';
import { Context } from '../context/StarWarsContext';

function Table() {
  const { data } = useContext(Context);
  // console.log(Object.keys(data));

  // console.log(data);
  return (
    <div>
      <table>
        <thead>
          {/* { data && keysData.map(
          (item) => (
            <th key={ item }>{item}</th>
          ),
        )} */}
          <tr>
            <th>Item 1</th>
            <th>Item 1</th>
            <th>Item 1</th>
            <th>Item 1</th>
            <th>Item 1</th>
            <th>Item 1</th>
            <th>Item 1</th>
            <th>Item 1</th>
            <th>Item 1</th>
            <th>Item 1</th>
            <th>Item 1</th>
            <th>Item 1</th>
            <th>Item 1</th>
          </tr>
        </thead>
        <tbody>
          { data.map(
            (item) => (
              <tr key={ item.name }>
                <td>{item.name}</td>
                <td>{item.rotation_period}</td>
                <td>{item.orbital_period}</td>
                <td>{item.diameter}</td>
                <td>{item.climate}</td>
                <td>{item.gravity}</td>
                <td>{item.terrain}</td>
                <td>{item.surface_water}</td>
                <td>{item.population}</td>
                <td>{item.films}</td>
                <td>{item.created}</td>
                <td>{item.edited}</td>
                <td>{item.url}</td>
              </tr>

            ),
          )}

        </tbody>
      </table>
    </div>
  );
}

export default Table;
