import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import FilterByName from './Filters/FilterByName';
import Load from './Loading/Loading';

const Table = () => {
  const { globalState } = useContext(StarWarsContext);
  const { filters, isLoading } = globalState[0];
  return (
    <div>
      {isLoading ? (
        <Load />
      ) : (
        <div>
          <FilterByName />
          <table>
            <tr>
              <th>Name</th>
              <th>Rotation Period</th>
              <th>Orbital Period</th>
              <th>Diameter</th>
              <th>Climte</th>
              <th>Gravity</th>
              <th>Terrain</th>
              <th>Surface Water</th>
              <th>Population</th>
              <th>Films</th>
              <th>Criated</th>
              <th>Edited</th>
              <th>Url</th>
            </tr>
            {filters.map((planet, index) => (
              <tr key={ index }>
                <td>{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>{planet.films}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default Table;
