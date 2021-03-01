import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Table() {
  const { apiData } = useContext(StarWarsContext);
  const tableHeaders = apiData ? Object.keys(apiData.results[0])
    .filter((item) => item !== 'residents') : '';
  return (
    <div>
      {apiData ? (
        <table>
          <thead>
            <tr>
              {tableHeaders.map((item) => (
                <th key={ item }>{item.toUpperCase()}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {apiData.results.map(({
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
            }) => (
              <tr key={ name }>
                <td data-testid="planet-name">{name}</td>
                <td>{rotationPeriod}</td>
                <td>{orbitalPeriod}</td>
                <td>{diameter}</td>
                <td>{climate}</td>
                <td>{gravity}</td>
                <td>{terrain}</td>
                <td>{surfaceWater}</td>
                <td>{population}</td>
                <td>{films.toString()}</td>
                <td>{created}</td>
                <td>{edited}</td>
                <td>{url}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h2>Carregando...</h2>
      )}
    </div>
  );
}
