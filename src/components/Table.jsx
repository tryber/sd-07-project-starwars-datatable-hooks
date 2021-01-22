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
              if (value.apiResponse) {
                let shown = value.apiResponse;
                if (value.filters.filterByName.name !== undefined) {
                  shown = shown
                    .filter((planet) => planet.name
                      .includes(value.filters.filterByName.name));
                }
                const zero = 0;
                if (value.filters.filterByNumericValues.length > zero) {
                  value.filters.filterByNumericValues.forEach((condition) => {
                    if (condition.comparison === 'maior que') {
                      shown = shown
                        .filter((planet) => Number(planet[condition.column])
                        > Number(condition.value));
                    } else if (condition.comparison === 'menor que') {
                      shown = shown
                        .filter((planet) => Number(planet[condition.column])
                        < Number(condition.value));
                    } else if (condition.comparison === 'igual a') {
                      shown = shown
                        .filter((planet) => Number(planet[condition.column])
                        === Number(condition.value));
                    }
                  });
                }
                return shown.map((planet) => (
                  <tr key={ planet.name }>
                    {Object.keys(planet)
                      .filter((key) => key !== 'residents')
                      .map((key) => <td key={ key }>{planet[key]}</td>)}
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
