import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { filteredData, isFetching } = useContext(StarWarsContext);
  const zero = 0;
  if (isFetching) return <div>Loading...</div>;
  if (filteredData.length === zero) {
    return (
      <div>Nenhum planeta corresponde a pesquisa</div>
    );
  }
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(filteredData[0])
            .filter((key) => key !== 'residents')
            .map((key) => <th key={ key }>{key}</th>)}
        </tr>
      </thead>
      <tbody>
        {filteredData.map((planet) => {
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
