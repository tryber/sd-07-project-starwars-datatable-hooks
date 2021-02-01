import React, { useContext, useEffect } from 'react';
import { StarWarsContext } from '../Context';

function Table() {
  const context = useContext(StarWarsContext);
  const { filterData, planetList, setPlanetList, planetListName } = context;

  useEffect(() => {
    setPlanetList(context.data);
  },
  [context, setPlanetList]);

  const filterDataCondition = filterData;

  return planetList.length ? (
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
        {(filterData.length ? filterDataCondition : planetListName)
          .map((planet) => (
            <tr key={ planet.name }>
              <td
                data-testid="planet-name"
              >
                {planet.name}
              </td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films[0]}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
      </tbody>
    </table>
  )
    : <div>Loading...</div>;
}

export default Table;
