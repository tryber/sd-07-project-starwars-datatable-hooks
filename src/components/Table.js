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
        {data.map((planet, position) => {
          const { filterByName, filterByNumericValues } = filters;
          const zero = 0;
          let controlVar = zero;
          const filterNumericLength = filterByNumericValues.length;

          filterByNumericValues.forEach((filter) => {
            const { column, comparison, value } = filter;
            if (
              comparison === 'maior que' && Number(planet[column]) > Number(value)
            ) {
              controlVar += 1;
            } else if (
              comparison === 'menor que' && Number(planet[column]) < Number(value)
            ) {
              controlVar += 1;
            } else if (
              comparison === 'igual a' && Number(planet[column]) === Number(value)
            ) {
              controlVar += 1;
            }
          });
          if (
            !planet.name.includes(filterByName) || !(controlVar === filterNumericLength)
          ) return null;
          // render line
          return (
            <tr key={ position }>
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
