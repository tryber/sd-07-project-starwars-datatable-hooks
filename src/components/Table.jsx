import React, { useContext } from 'react';
import { StarWarsContext } from '../context';
import { useFilterPlanets, useColumnsKeys } from '../hooks';

export default function Table() {
  const { data: { loading } } = useContext(StarWarsContext);
  const planets = useFilterPlanets();
  const columns = useColumnsKeys(['residents']);
  return (
    loading
      ? (<h1>loading...</h1>)
      : (
        <table>
          <thead>
            <tr>
              {columns && columns.map((column, index) => (
                <th key={ index }>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {planets.map((planet, index) => (
              <tr key={ index }>
                <td data-testid="planet-name">{planet.name}</td>
                {columns.filter((key) => key !== 'name')
                  .map((key, i) => (<td key={ i }>{planet[key]}</td>))}
              </tr>
            ))}
          </tbody>
        </table>
      )
  );
}
