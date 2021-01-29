import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Table = () => {
  const { data } = useContext(StarWarsContext);

  const returnPlanetsList = () => (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>rotation_period</th>
          <th>orbital_period</th>
          <th>diameter</th>
          <th>climate</th>
          <th>gravity</th>
          <th>terrain</th>
          <th>surface_water</th>
          <th>population</th>
          <th>films</th>
          <th>created</th>
          <th>edited</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>
        {data.results.map((planet) => (
          <tr key={ planet.name }>
            {Object.keys(planet).filter((info) => info !== 'residents')
              .map((info) => (
                <td
                  key={ planet.info }
                >
                  { planet[info] }
                </td>
              ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
  return (
    <div>
      {data.results === undefined ? 'loading'
        : returnPlanetsList()}
    </div>
  );
};

export default Table;
