import React, { useContext } from 'react';

import { StarWarsContext } from '../context/Provider';

export default function Table() {
  const { data } = useContext(StarWarsContext);
  console.log(data);

  const renderTableBody = () => data
    .map((planet, index) => (
      <tr key={ index }>
        { Object.keys(planet).map((planetKey) => {
          if (planetKey === 'residents') return null;
          return (
            <td key={ planetKey }>
              { planet[planetKey] }
            </td>
          );
        })}
      </tr>));

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
        { renderTableBody() }
      </tbody>
    </table>
  );
}
