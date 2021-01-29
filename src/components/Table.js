import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { dataApi } = useContext(StarWarsContext);
  const { results } = dataApi;
  if (dataApi === 'Loading') return <h1>Loading</h1>;
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Edited</th>
          <th>Films</th>
          <th>Population</th>
          <th>Climate</th>
          <th>Url</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Gravity</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => (
          <tr key={ result.name }>
            <td>{result.name}</td>
            <td>{result.rotation_period}</td>
            <td>{result.orbital_period}</td>
            <td>{result.diameter}</td>
            <td>{result.edited}</td>
            <td>{result.films}</td>
            <td>{result.population}</td>
            <td>{result.climate}</td>
            <td>{result.url}</td>
            <td>{result.terrain}</td>
            <td>{result.surface_water}</td>
            <td>{result.gravity}</td>
            <td>{result.created}</td>
          </tr>))}
      </tbody>
    </table>);
}
export default Table;
