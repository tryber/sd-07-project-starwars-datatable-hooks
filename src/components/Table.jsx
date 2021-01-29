import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data } = useContext(StarWarsContext);
  const { planets, setPlanets, isLoading, filteringByName,
    filters, filteringByNumericValues } = data;
  const { filterByName, filterByNumericValues } = filters;
  const { column, comparison, value } = filterByNumericValues;
  const [columnsArr, setColumnsArr] = useState(['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water']);

  const removeColumnFilter = (columnOption) => {
    const arr = columnsArr.filter((item) => item !== columnOption); // Source: https://medium.com/javascript-in-plain-english/how-to-remove-an-element-from-array-in-javascript-c968b920a03d
    setColumnsArr(arr);
  };

  const onClickHandler = () => {
    removeColumnFilter(column);
    if (column !== '' && comparison !== '' && value !== '') {
      setPlanets(planets.filter((planet) => {
        if (comparison === 'menor que') {
          return parseInt(value, 10) > parseInt(planet[column], 10);
        }
        if (comparison === 'maior que') {
          return parseInt(planet[column], 10) > parseInt(value, 10);
        }
        if (comparison === 'igual a') {
          return parseInt(planet[column], 10) === parseInt(value, 10);
        }
        return planet;
      }));
    }
  };

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
          {columnsArr.map((columnOption, index) => (
            <option key={ index } value={ columnOption }>
              { `${columnOption}` }
            </option>
          ))}
        </select>
        <select
          name="comparison"
          data-testid="comparison-filter"
          onChange={ filteringByNumericValues }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
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
