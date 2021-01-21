import React from 'react';
import SWContext from '../context/SWContext';

function Table() {
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
        <tbody>
          <SWContext.Consumer>
            {(value) => {
              if (value) {
                return value.map((planet) => (
                  <tr key={ planet.name }>
                    {Object.keys(planet).filter((key) => key !== 'residents').map((key) => <td key={ key }>{planet[key]}</td>)}
                  </tr>
                ));
              }
            }}
          </SWContext.Consumer>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
