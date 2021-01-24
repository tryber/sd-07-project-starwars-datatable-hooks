import React, { useContext } from 'react';
import context from '../../context';

const Table = () => {
  const firstCaracter = 0;
  const { data, filters } = useContext(context);
  const { name } = filters.filterByName;
  if (!data) { // || !filters.filterByNumericValues.length) {
    return (<div>Carregando ...</div>);
  }
  let filtered = [];
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
                  .map((item, index) => <td key={ index }>{item}</td>)
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
