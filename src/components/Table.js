import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';
import NumericFilter from './numericFilter';

function Table() {
  const { data, setSearch, search } = useContext(StarWarsContext);
  return (
    <div>
      <NumericFilter />
      <input
        type="text"
        placeholder="Search Planets"
        data-testid="name-filter"
        onChange={ (e)=> setSearch(e.target.value)  }
      />
      <table>

        <thead>
          <tr>
            <th>name</th>
            <th>rotation_period</th>
            <th>created</th>
            <th>orbital_period</th>
            <th>edited</th>
            <th>diameter</th>
            <th>url</th>
            <th>climate</th>
            <th>films</th>
            <th>gravity</th>
            <th>terrain</th>
            <th>surface_water</th>
            <th>population</th>

          </tr>
        </thead>
        <tbody>
          { data.filter((planet) => planet.name.toLowerCase().includes(search.toLowerCase())).map((planet) => (
            <tr key={ planet.name }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.created}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.edited}</td>
              <td>{planet.diameter}</td>
              <td>{planet.url}</td>
              <td>{planet.climate}</td>
              <td>{planet.films}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
