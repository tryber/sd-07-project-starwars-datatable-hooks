import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { filterResults } = useContext(StarWarsContext);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>rotation_period</th>
            <th>orbital_period</th>
            <th>diameter</th>
            <th>climate</th>
            <th>gravity</th>
            <th>terrain</th>
            <th>surface_water</th>
            <th>population</th>
            <th>films</th>
            <th>created</th>
            <th>edited</th>
            <th>url</th>
          </tr>
        </thead>
        {
          filterResults.map((element) => (
            <tbody key={ element.name }>
              <tr>
                <td data-testid="planet-name">{element.name}</td>
                <td>{element.rotation_period}</td>
                <td>{element.orbital_period}</td>
                <td>{element.diameter}</td>
                <td>{element.climate}</td>
                <td>{element.gravity}</td>
                <td>{element.terrain}</td>
                <td>{element.surface_water}</td>
                <td>{element.population}</td>
                <td>{element.films}</td>
                <td>{element.created }</td>
                <td>{element.edited}</td>
                <td>{element.url}</td>
              </tr>
            </tbody>
          ))
        }
      </table>
    </div>
  );
}

export default Table;
