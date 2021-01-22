import React, { useContext } from 'react';

import { StarWarsContext } from '../context/Provider';

export default function Table() {
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
          let filterChecks = 0;
          if (planet.name.includes(filters.filterByName)) {
            filters.filterByNumericValues.forEach((filter) => {
              const { comparison, column, value } = filter;
              if (comparison === 'maior que' && Number(planet[column]) > Number(value)) {
                filterChecks += 1;
              } else if (comparison === 'menor que' && Number(planet[column]) < Number(value)) {
                filterChecks += 1;
              } else if (comparison === 'igual a' && Number(planet[column]) === Number(value)) {
                filterChecks += 1;
              }
            });
            if (filterChecks === filters.filterByNumericValues.length) {
              return (
                <tr key={ index }>
                  {Object.keys(planet).map((key) => {
                    if (key === 'residents') return null;
                    return (
                      <td key={ key }>{planet[key]}</td>
                    );
                  })}
                </tr>
              );
            }
          }
          return null;
        })}
      </tbody>
    </table>
  );
}
