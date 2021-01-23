import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Table = () => {
  const { data } = useContext(StarWarsContext);
  console.log(data);
  return (
    <table>
      <thead>
        <tr>
          <th>climate</th>
          <th>created</th>
          <th>diameter</th>
          <th>edited</th>
          <th>gravity</th>
          <th>name</th>
          <th>orbital_period</th>
          <th>population</th>
          <th>rotation_period</th>
          <th>surface_water</th>
          <th>terrain</th>
          <th>url</th>
          <th>films</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((name, index) => (
            <tr key={ index }>
              <td>{name.climate}</td>
              <td>{name.created}</td>
              <td>{name.diameter}</td>
              <td>{name.edited}</td>
              <td>{name.gravity}</td>
              <td>{name.name}</td>
              <td>{name.orbital_period}</td>
              <td>{name.population}</td>
              <td>{name.rotation_period}</td>
              <td>{name.surface_water}</td>
              <td>{name.terrain}</td>
              <td>{name.url}</td>
              <td>
                {
                  name.films.map((films, i) => (
                    <td key={ i }>{ films }</td>
                  ))
                }
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>

  );
};

export default Table;
