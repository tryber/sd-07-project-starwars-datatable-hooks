import React, { useContext } from 'react';
import context from '../../context';

const Table = () => {
  const firstCaracter = 0;
  const { data, filters } = useContext(context);
  const { name } = filters.filterByName;
  const { order } = filters;
  if (!data) { // || !filters.filterByNumericValues.length) {
    return (<div>Carregando ...</div>);
  }
  let filtered = [];

  function isNumber(n) {
    return !Number.isNaN(parseFloat(n)) && Number.isFinite(parseFloat(n));
  }

  const sortMaker = (array, column, ascDesc) => {
    // console.log(array)
    const negat = -1;
    let positive = 1;
    let negative = negat;
    if (ascDesc === 'DESC') {
      negative = 1;
      positive = negat;
    }
    const zero = 0;
    array.sort((a, b) => {
      if (isNumber(a[column]) && isNumber(b[column])) {
        if (parseFloat(a[column]) < parseFloat(b[column])) return negative;
        if (parseFloat(a[column]) > parseFloat(b[column])) return positive;
        return zero;
      }
      if (a[column] < b[column]) return negative;
      if (a[column] > b[column]) return positive;
      return zero;
    });
    return array;
  };

  if (data) {
    filtered = data.filter((planets) => planets.name.includes(name));

    filters.filterByNumericValues.forEach(({ column, comparison, value }) => {
      filtered = filtered.filter((planets) => {
        switch (comparison) {
        case 'maior que':
          return parseInt(planets[column], 10) > parseInt(value, 10);
        // || planets[column] === 'unknown';
        case 'menor que':
          return parseInt(planets[column], 10) < parseInt(value, 10);
        // || planets[column] === 'unknown';
        case 'igual a':
          return parseInt(planets[column], 10) === parseInt(value, 10);
        // || planets[column] === 'unknown';
        default:
          return (true);
        }
      });
    });

    filtered = sortMaker(filtered, order.column, order.sort);
  }

  // const loading = () => (<div>Carregando ...</div>);
  const notFound = () => (<div>Nenhum planeta encontrado!</div>);
  if (!filtered.length) return (notFound());
  // if (data && filtered.length) {
  return (
    <table>
      <thead>
        <tr>
          {
            Object.keys(data[0])
              .filter((item) => (item !== 'residents'))
              .map((item) => (
                <th key={ item }>
                  {item
                    .replace('_', ' ')
                    .replace(
                      item.charAt(firstCaracter),
                      item.charAt(firstCaracter).toUpperCase(),
                    )}
                </th>
              ))
          }
        </tr>
      </thead>
      <tbody>
        {
          filtered.map((planet) => (
            <tr key={ planet.name }>
              {
                Object.values(planet)
                  .map((item, index) => (
                    <td
                      key={ index }
                      data-testid={ (!index) ? 'planet-name' : null }
                    >
                      {item}
                    </td>
                  ))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
  // }
  // if (!data) return (loading());
  // if (!filtered.length) return (notFound());
};

export default Table;
