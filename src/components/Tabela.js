import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

function Table() {
  const { data, filters } = useContext(StarWarsContext);
  const { filterByName, filterByNumericValues } = filters;
  const chaves = [
    'name',
    'rotation_period',
    'orbital_period',
    'diameter',
    'climate',
    'gravity',
    'terrain',
    'surface_water',
    'population',
    'films',
    'created',
    'edited',
    'url',
  ];
  return (
    <table>
      <thead>
        <tr>
          {chaves.map((chave) => (
            <th key={ chave }>
              {chave}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((planet, position) => {
          const string = planet.name;
          const stringLower = string.toLowerCase();
          let renderize = true;
          filterByNumericValues.forEach((element) => {
            const { column, comparison, value } = element
            switch (comparison) {
            case 'menor que':
              if (!(Number(planet[column]) < Number(value))) {
                renderize = false;
              }
              break;
            case 'maior que':
              if (!(Number(planet[column]) > Number(value))) {
                renderize = false;
              }
              break;
            case 'igual a':
              if (!(Number(planet[column]) === Number(value))) {
                renderize = false;
              }
              break;
            default:
              break;
            }
          });
          if (!stringLower.includes(filterByName) || !renderize) {
            return null;
          }
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
