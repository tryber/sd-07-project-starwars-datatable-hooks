import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, filters } = useContext(StarWarsContext);
  const { filterByName } = filters;
  const dataTags = data[0] || [];
  const datasSelectedFilterHeader = Object.keys(dataTags).filter(
    (item) => item !== 'residents',
  );
  const dataFilterResult = data.filter(
    (planet) => planet.name.toLowerCase().includes(filterByName.name.toLowerCase()),
  ) || [];

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            {datasSelectedFilterHeader.map((item, index) => (
              <th key={ index }>{item}</th>
            ))}
          </tr>
        </thead>
        {dataFilterResult.map((planet, index) => (
          <tbody key={ index }>
            <tr>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films.map((movie) => movie)}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default Table;
