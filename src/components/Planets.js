import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Planets = () => {
  const {
    planets,
    setFilters,
    filters,
  } = useContext(StarWarsContext);

  const handlePlanet = ({ target }) => {
    setFilters({ ...filters, filterByName: target.value });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          data-testid="name-filter"
          onChange={ handlePlanet }
        />
      </div>
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
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          { planets.filter((planet) => planet.name
            .includes(filters.filterByName))
            .map((planet) => (
              <tr key={ planet.name }>
                <td>{ planet.name }</td>
                <td>{ planet.rotation_period }</td>
                <td>{ planet.orbital_period }</td>
                <td>{ planet.diameter }</td>
                <td>{ planet.climate }</td>
                <td>{ planet.gravity }</td>
                <td>{ planet.terrain }</td>
                <td>{ planet.surface_water }</td>
                <td>{ planet.population }</td>
                <td>{ planet.films }</td>
                <td>{ planet.created }</td>
                <td>{ planet.edited }</td>
                <td>{ planet.url }</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Planets;
