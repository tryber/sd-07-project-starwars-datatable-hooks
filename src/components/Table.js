import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { planets } = useContext(StarWarsContext);
  const [filteredPlanets, setFilteredPlanets] = useState('');

  const filteringPlanets = planets.filter((planet) => (
    planet.name.toLowerCase().includes(filteredPlanets.toLowerCase())));

  return (
    <div>
      <header>
        <h2>Star Wars Planets Guide</h2>
        <input
          onChange={ (event) => setFilteredPlanets(event.target.value) }
          name="search-bar"
          type="text"
          data-testid="name-filter"
          placeholder="Encontre o planeta"
        />
      </header>
      <table>
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
          <th>films</th>
          <th>created</th>
          <th>edited</th>
          <th>url</th>
        </tr>
        {filteringPlanets.map((planet) => (
          <tr key={ planet.name }>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>
              {planet.orbital_period}
            </td>
            <td>
              {planet.diameter}
            </td>
            <td>
              {planet.climate}
            </td>
            <td>
              {planet.gravity}
            </td>
            <td>
              {planet.terrain}
            </td>
            <td>
              {planet.surface_water}
            </td>
            <td>
              {planet.population}
            </td>
            <td>
              {planet.films}
            </td>
            <td>
              {planet.created}
            </td>
            <td>
              {planet.edited}
            </td>
            <td>
              {planet.url}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Table;
