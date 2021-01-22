import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Load from './Loading/Loading';

const Table = () => {
  const { planets, isLoading } = useContext(StarWarsContext);
  return (
    <div>
      {isLoading ? (
        <Load />
      ) : (
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
          {planets.map((planet, index) => (
            <tr key={ index }>
              <td key={ index }>{planet.name}</td>
              <td key={ index }>{planet.rotation_period}</td>
              <td key={ index }>{planet.orbital_period}</td>
              <td key={ index }>{planet.diameter}</td>
              <td key={ index }>{planet.climate}</td>
              <td key={ index }>{planet.gravity}</td>
              <td key={ index }>{planet.terrain}</td>
              <td key={ index }>{planet.surface_water}</td>
              <td key={ index }>{planet.population}</td>
              <td key={ index }>{planet.films}</td>
              <td key={ index }>{planet.created}</td>
              <td key={ index }>{planet.edited}</td>
              <td key={ index }>{planet.url}</td>
            </tr>
          ))}
        </table>
      )}
    </div>
  );
};

export default Table;
