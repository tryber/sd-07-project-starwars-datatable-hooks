import { render } from '@testing-library/react';
import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { line } = useContext(StarWarsContext);
  console.log(line);

  return (
    <table>
      <thead>
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
      </thead>
      <tbody>
        {line.map(info => <td>{info}</td>)}
        {/* {Object.keys(line).forEach((item) => {console.log(line)})} */}
          {/* {Object.keys(line).forEach((item) => {})} */}
      </tbody>
    </table>
  );
}

export default Table;
