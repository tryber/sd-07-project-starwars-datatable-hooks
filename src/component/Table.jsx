import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { arrayPlanets } = useContext(StarWarsContext);
  return (
    <div>
      <table border="1">
        <colgroup span="13" />
        <thead>
          <tr>
            <th>climate</th>
            <th>created</th>
            <th>diameter</th>
            <th>edited</th>
            <th>films</th>
            <th>gravity</th>
            <th>name</th>
            <th>orbital_period</th>
            <th>population</th>
            <th>rotation_period</th>
            <th>surface_water</th>
            <th>terrain</th>
            <th>url</th>
          </tr>
        </thead>

        {
          arrayPlanets.map((item) => (
            <tbody key={ item.name }>
              <tr>
                <td>{item.climate}</td>
                <td>{item.created }</td>
                <td>{item.diameter}</td>
                <td>{item.edited}</td>
                <td>{item.films}</td>
                <td>{item.gravity}</td>
                <td>{item.name}</td>
                <td>{item.orbital_period}</td>
                <td>{item.population}</td>
                <td>{item.rotation_period}</td>
                <td>{item.surface_water}</td>
                <td>{item.terrain}</td>
                <td>{item.url}</td>
              </tr>
            </tbody>
          ))
        }
      </table>
    </div>
  );
}

export default Table;
