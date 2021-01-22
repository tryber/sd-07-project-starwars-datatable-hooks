import React from 'react';
import Table from './Table';

const RenderTable = () => (
  <div>
    <table>
      <thead>
        <tr>
          <th>Climate</th>
          <th>Created</th>
          <th>Diameter</th>
          <th>Edited</th>
          <th>Films</th>
          <th>Gravity</th>
          <th>Name</th>
          <th>Orbital_period</th>
          <th>Population</th>
          <th>rotation_period</th>
          <th>surface_water</th>
          <th>terrain</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>
        <Table />
      </tbody>
    </table>
  </div>
);

export default RenderTable;
