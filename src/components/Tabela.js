import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

function Table() {
  const { data } = useContext(StarWarsContext);
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
        {data.map((planet, position) => (
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
        ))}
      </tbody>
    </table>
  );
}

export default Table;
