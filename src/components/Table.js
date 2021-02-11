import React, { useContext } from 'react';

import { StarWarsContext } from '../context/Provider';

export default function Table() {
  const { data, filters } = useContext(StarWarsContext);
  const { filterByName } = filters;

  const renderTableBody = () => {
    const { filterByNumericValues, order } = filters;
    let preFiltered = data;
    filterByNumericValues.forEach((filter) => {
      const { column, comparison, value } = filter;
      preFiltered = preFiltered.filter((planet) => {
        let check = false;
        if (comparison === 'maior que' && Number(planet[column]) > Number(value)) {
          check = true;
        }
        if (comparison === 'menor que' && Number(planet[column]) < Number(value)) {
          check = true;
        }
        if (comparison === 'igual a' && Number(planet[column]) === Number(value)) {
          check = true;
        }
        return check;
      });
    });

    preFiltered.sort((a, b) => {
      const one = 1;
      const minusOne = -1;
      const zero = 0;
      if (order.column === 'name') {
        if (a[order.column] > b[order.column]) {
          if (order.sort === 'ASC') return one;
          return minusOne;
        }
        if (a[order.column] < b[order.column]) {
          if (order.sort === 'ASC') return minusOne;
          return one;
        }
        return zero;
      }
      if (Number(a[order.column]) > Number(b[order.column])) {
        if (order.sort === 'ASC') return one;
        return minusOne;
      }
      if (Number(a[order.column]) < Number(b[order.column])) {
        if (order.sort === 'ASC') return minusOne;
        return one;
      }
      return zero;
    });

    return preFiltered.map((planet, index) => {
      if (planet.name.toLowerCase().includes(filterByName)) {
        return (
          <tr key={ index }>
            { Object.keys(planet).map((planetKey) => {
              if (planetKey === 'residents') return null;
              return (
                <td key={ planetKey } data-testid={ `planet-${planetKey}` }>
                  { planet[planetKey] }
                </td>
              );
            })}
          </tr>);
      }
      return null;
    });
  };

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
// teste para commit
