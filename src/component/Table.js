import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import '../table.css';

function Table() {
  const { filterResults } = useContext(StarWarsContext);

  return (
    <div>
      <table className="tabela">
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
          filterResults.map((item) => (
            <tbody key={ item.name }>
              <tr>
                <td data-testid="planet-name">{item.name}</td>
                <td>{item.rotation_period}</td>
                <td>{item.orbital_period}</td>
                <td>{item.diameter}</td>
                <td>{item.climate}</td>
                <td>{item.gravity}</td>
                <td>{item.terrain}</td>
                <td>{item.surface_water}</td>
                <td>{item.population}</td>
                <td>{item.films}</td>
                <td>{item.created }</td>
                <td>{item.edited}</td>
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
