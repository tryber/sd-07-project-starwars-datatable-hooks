import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, isLoading, filters } = useContext(StarWarsContext);
  if (isLoading) return <div>Loading...</div>;
  console.log(filters);
  const { filterByName: { name } } = filters;
  return (
    <table>
      <thead>
        <tr>
          { console.log(data) }
          {data && Object.keys(data[0])
            .filter((key) => key !== 'residents')
            .map((key) => <th key={ key }>{key}</th>)}
        </tr>
      </thead>
      <tbody>
        {data && data
          .filter((planet) => planet.name.toLowerCase().includes(name))
          .map((planet) => {
            /* if (parseInt(planet.diameter) < 12000) return null; */
            const {
              name: PlanetName,
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
              <tr key={ PlanetName }>
                <td>{PlanetName}</td>
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
