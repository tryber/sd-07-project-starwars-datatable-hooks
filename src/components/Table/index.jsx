import React, { useContext } from 'react';

import StarWarsContext from '../../context/StarWarsContext';
import Filters from '../Filters';

function Table() {
  const { data, filters } = useContext(StarWarsContext);
  const { filters: { filterByName: { name } } } = filters;

  return (
    <div>
      <Filters />
      <h1>PLANETAS</h1>
      {data ? (
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Rotation Period</th>
                <th>Orbital Period</th>
                <th>Diameter</th>
                <th>Climate</th>
                <th>Gravity</th>
                <th>Terrain</th>
                <th>Surface Water</th>
                <th>Population</th>
                <th>Films</th>
                <th>Created</th>
                <th>Edited</th>
                <th>URL</th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter((item) => item.name.toLowerCase().includes(name.toLowerCase()))
                .map((item) => (
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
                ))}
            </tbody>
          </table>
        </div>
      ) : <h1>Loading...</h1>}
    </div>
  );
}

export default Table;
