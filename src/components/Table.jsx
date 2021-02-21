import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import planetsAPI from '../services/planetsAPI';

const Table = () => {
  const { data, setData } = useContext(StarWarsContext);

  useEffect(() => {
    planetsAPI().then((r) => setData(r));
  }, [setData]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Residents</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
          </tr>
        </thead>
        <tbody>
          {data.map((planet, i) => (
            <tr key={ i }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>residents</td>
              <td>films</td>
              <td>{planet.created}</td>
              {/* format dates */}
              <td>{planet.edited}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default Table;
