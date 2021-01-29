import React, { useContext, useEffect } from 'react';

import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const {
    error,
    isFetching,
    data,
    getCurrentPlanets,
    filteredData,
  } = useContext(StarWarsContext);
  // console.log(useContext(StarWarsContext));

  useEffect(() => {
    getCurrentPlanets();
  }, [getCurrentPlanets]);

  return (
    <div>
      {isFetching && 'Loading...'}
      {!isFetching && (
        <table>
          <caption>STAR WARS</caption>
          <thead>
            <tr>
              <th>Name</th>
              <th>rotation_period</th>
              <th>orbital_period</th>
              <th>diameter</th>
              <th>climate</th>
              <th>gravity</th>
              <th>terrain</th>
              <th>surface_water</th>
              <th>population</th>
              <th>residents</th>
              <th>films</th>
              <th>created</th>
              <th>edited</th>
            </tr>
          </thead>
          <tbody>
            {(filteredData || data).map((planets) => (
              <tr key={ planets.name }>
                <td data-testid="planet-name">{planets.name}</td>
                <td>{planets.rotation_period}</td>
                <td>{planets.orbital_period}</td>
                <td>{planets.diameter}</td>
                <td>{planets.climate}</td>
                <td>{planets.gravity}</td>
                <td>{planets.terrain}</td>
                <td>{planets.surface_water}</td>
                <td>{planets.population}</td>
                <td>{planets.residents.length}</td>
                <td>{planets.films.length}</td>
                <td>{planets.created}</td>
                <td>{planets.edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {!isFetching && error}
    </div>
  );
}

export default Table;
