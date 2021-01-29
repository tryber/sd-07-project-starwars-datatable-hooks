import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, isLoading, filters, numberClicks } = useContext(StarWarsContext);
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
            let bool = false;
            let boolTotal = false;
            const ZERO = 0;
            if (numberClicks >= 1) {
              for (let i = ZERO; i <= numberClicks; i += 1) {
                if (Object.entries(filters)[1][1][i]) {
                  const { column, comparison, value } = Object.entries(filters)[1][1][i];

                  // console.log(filters.filterByNumericValues[0].value);
                  // console.log(filters.filterByNumericValues[0].comparison);
                  if (comparison === 'igual a') {
                    bool = parseInt(planet[column], 10) !== parseInt(value, 10);
                  }
                  if (comparison === 'maior que') {
                    bool = parseInt(planet[column], 10) <= parseInt(value, 10)
                || planet[column] === 'unknown';
                  }

                  if (comparison === 'menor que') {
                    bool = (parseInt(planet[column], 10) >= parseInt(value, 10))
                || planet[column] === 'unknown';
                  }
                  boolTotal = boolTotal || bool;

                  if (boolTotal) return null;
                }
              }
            }
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
