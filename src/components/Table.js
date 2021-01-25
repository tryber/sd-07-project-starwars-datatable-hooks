import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

function Table() {
  const { data, filters, columns } = useContext(StarWarsContext);
  const planets = [...data];
  const zero = 0;
  const one = 1;
  const minusOne = -1;

  const { order: { sort, column: columnSort } } = filters;
  planets.sort((a, b) => {
    if (sort === 'ASC') {
      if (!Number.isNaN(Number(a[columnSort])) || !Number.isNaN(Number(b[columnSort]))) {
        return a[columnSort] - b[columnSort];
      } if (a[columnSort] < b[columnSort]) {
        return minusOne;
      } if (a[columnSort] > b[columnSort]) {
        return one;
      }
      return zero;
    } if (sort === 'DESC') {
      if (!Number.isNaN(Number(a[columnSort])) || !Number.isNaN(Number(b[columnSort]))) {
        return b[columnSort] - a[columnSort];
      } if (a[columnSort] > b[columnSort]) {
        return minusOne;
      } if (a[columnSort] < b[columnSort]) {
        return one;
      }
      return zero;
    }
    return null;
  });

  return (
    <table>
      <thead>
        <tr>
          {columns.map((nameColumnHeader, index) => (
            <th key={ index }>{ nameColumnHeader }</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {planets.map((planet, position) => {
          const { filterByName, filterByNumericValues } = filters;

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
              {Object.entries(planet).map(([key, value]) => (
                <td
                  key={ key }
                  data-testid={ key === 'name' ? 'planet-name' : '' }
                >
                  {value}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
