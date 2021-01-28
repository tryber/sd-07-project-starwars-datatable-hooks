import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data } = useContext(StarWarsContext);
  const { planets, setPlanets, isLoading, filteringByName,
    filters, filteringByNumericValues } = data;
  const { filterByName, filterByNumericValues } = filters;
  const { column, comparison, value } = filterByNumericValues;
  const [myPlanets] = useState([...planets]);
  // teste evaluator
  const onClickHandler = () => ((column && comparison && value) ? (
    setPlanets(planets.filter((planet) => {
      switch (comparison) {
      case 'biggerThen':
        return planet[column] > value;
      case 'smallThat':
        return planet[column] < value;
      case 'equal':
        return planet[column] === value;
      default:
        return planet;
      }
    }))) : setPlanets(...myPlanets)
  );

  if (isLoading) {
    return <div>teste</div>;
  }
  return (
    <div>
      <div>
        <input
          type="text"
          data-testid="name-filter"
          onChange={ filteringByName }
        />
        <select
          name="column"
          data-testid="column-filter"
          onChange={ filteringByNumericValues }
        >
          <option value={ null }>Coluna</option>
          <option value="population">Population</option>
          <option value="orbital_period">Orbital Period</option>
          <option value="diameter">Diameter</option>
          <option value="rotation_period">Rotation Period</option>
          <option value="surface_water">Surface Water</option>
        </select>
        <select
          name="comparison"
          data-testid="comparison-filter"
          onChange={ filteringByNumericValues }
        >
          <option value={ null }>Comparação</option>
          <option value="biggerThen">Maior que</option>
          <option value="smalThat">Menor que</option>
          <option value="equal">Igual a</option>
        </select>
        <input
          name="value"
          type="number"
          data-testid="value-filter"
          onChange={ filteringByNumericValues }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ onClickHandler }
        >
          Filtrar
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Climate</th>
            <th>Created</th>
            <th>Diameter</th>
            <th>Edited</th>
            <th>Films</th>
            <th>Gravity</th>
            <th>Orbital Period</th>
            <th>Population</th>
            <th>Rotation Period</th>
            <th>Surface Water</th>
            <th>Terrain</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {planets
            .filter((planet) => planet.name.includes(filterByName.name))
            .map((planet, index) => {
              const maxOfColumns = 13;
              if (index > maxOfColumns) {
                return null;
              }
              return (
                <tr key={ planet.name }>
                  <td>{planet.name}</td>
                  <td>{planet.climate}</td>
                  <td>{planet.created}</td>
                  <td>{planet.diameter}</td>
                  <td>{planet.edited}</td>
                  <td>{planet.films}</td>
                  <td>{planet.gravity}</td>
                  <td>{planet.orbital_period}</td>
                  <td>{planet.population}</td>
                  <td>{planet.rotation_period}</td>
                  <td>{planet.surface_water}</td>
                  <td>{planet.terrain}</td>
                  <td>{planet.url}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
