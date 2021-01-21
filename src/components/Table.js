import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

function Table() {
  const { data, filters } = useContext(StarWarsContext);
  return (
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
      <tbody>
        {data.map((planet, index) => {
          const { filterByName } = filters;
          if (!planet.name.includes(filterByName)) return null;
          return (
            <tr key={ index }>
              {Object.entries(planet).map(([key, value]) => {
                if (key === 'residents') {
                  return null;
                }
                return (
                  <td key={ key }>{value}</td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
