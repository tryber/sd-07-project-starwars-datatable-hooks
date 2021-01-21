import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, filters } = useContext(StarWarsContext);
  const { name } = filters.filterByName;
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Período de rotação</th>
          <th>Período de órbita</th>
          <th>Diâmetro</th>
          <th>Clima</th>
          <th>Criação</th>
          <th>Edição</th>
          <th>Filmes</th>
          <th>Gravidade</th>
          <th>População</th>
          <th>Água na superfície</th>
          <th>Terreno</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {data && data.filter((planet) => planet.name.includes(name))
          .filter((planet) => {
            if (filters.filterByNumericValues[0] !== undefined) {
              const { column, comparison, value } = filters.filterByNumericValues[0];
              switch (comparison) {
              case 'maior que':
                return parseInt(planet[column], 10) > parseInt(value, 10);
              case 'menor que':
                return parseInt(planet[column], 10) < parseInt(value, 10);
              case 'igual a':
                return parseInt(planet[column], 10) === parseInt(value, 10);
              default:
                return true;
              }
            }
            return true;
          })
          .map((planet, index) => (
            <tr key={ index }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.films}</td>
              <td>{planet.gravity}</td>
              <td>{planet.population}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.terrain}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
