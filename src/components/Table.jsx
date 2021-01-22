import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { StarWarsContext } from '../context/StarWarsContext';

function Table({ planets }) {
  const { filter } = useContext(StarWarsContext);
  const { name, column, comparison, value, applyFilter } = filter;
  const arrayLength = 0;
  const filterByName = planets.filter((planet) => planet
    .name.includes(name) === true);
  const filterWithNumbers = filterByName.filter((planet) => {
    const parameter = planet[`${column}`];
    const parameterToNumber = parseInt(parameter, 10);
    const valueToNumber = parseInt(value, 10);
    if (comparison === 'maior que') {
      return parameterToNumber > valueToNumber;
    }
    if (comparison === 'menor que') {
      return parameterToNumber < valueToNumber;
    }
    return parameterToNumber === valueToNumber;
  });

  const renderPlanets = (array) => (
    array.map((planet) => (
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
        <td>{ planet.films.length }</td>
        <td>{ planet.created }</td>
        <td>{ planet.edited }</td>
        <td>{ planet.url }</td>
      </tr>
    ))
  );

  return (
    <div className="table-container">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Rotation period</th>
            <th>Orbital period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
          { !applyFilter ? planets.length > arrayLength && renderPlanets(filterByName)
            : planets.length > arrayLength && renderPlanets(filterWithNumbers) }
        </tbody>
      </table>
    </div>
  );
}

export default Table;

Table.propTypes = {
  planets: propTypes.arrayOf(propTypes.object),
}.isRequired;
