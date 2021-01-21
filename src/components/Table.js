import React, { useContext, useEffect } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

function Table() {
  const { data, fetchPlanets } = useContext(StarWarsContext);

  useEffect(() => {
    fetchPlanets();
  }, []);

  // const header = Object.keys(data[0]);
  return (
    <div>
      <table>
          {/* <thead>
            <tr>
              {header.map((item) => <th>{item}</th>)}
            </tr>
          </thead> */}
          <tbody>
            {data.map((planet) => (
              <tr key={ planet }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
            </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}

export default Table;
