import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, isFetching } = useContext(StarWarsContext);
  if (isFetching) return <div>Loading...</div>;

  const { results } = data;
  return (
    <table>
      <thead>
        <tr>
          {results && Object.keys(results[0])
            .map((key) => <th key={ key }>{key}</th>)}
        </tr>
      </thead>
      <tbody>
        {results && results.map((planet) => {
          const {
            name,
            rotation_period: rotationPeriod,
            orbital_period: orbitalPeriod,
            diameter,
            climate,
            gravity,
            terrain,
            surface_water: surfaceWater,
            population,
            residents,
            films,
            created,
            edited,
            url,
          } = planet;
          return (
            <tr key={ name }>
              <td>{name}</td>
              <td>{rotationPeriod}</td>
              <td>{orbitalPeriod}</td>
              <td>{diameter}</td>
              <td>{climate}</td>
              <td>{gravity}</td>
              <td>{terrain}</td>
              <td>{surfaceWater}</td>
              <td>{population}</td>
              <td>{residents}</td>
              <td>{films}</td>
              <td>{created}</td>
              <td>{edited}</td>
              <td>{url}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
