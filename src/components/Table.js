import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, filters, dataHeader, filter } = useContext(StarWarsContext);

  const { filterByName, filterByNumericValues } = filters;
  const { comparison } = filterByNumericValues[0];
  const { column } = filterByNumericValues[0];
  const { value } = filterByNumericValues[0];
  const dataFilterResultName = data.filter(
    (planet) => planet.name.toLowerCase().includes(filterByName.name.toLowerCase()),
  ) || [];

  const filterCompare = () => {
    if (comparison === 'igual a') {
      return dataFilterResultName.filter((item) => item[column] === value);
    } if (comparison === 'maior que') {
      return dataFilterResultName.filter((item) => Number(item[column]) > value);
    } if (comparison === 'menor que') {
      return dataFilterResultName.filter((item) => item[column] <= value);
    }
  };

  const tableRender = filter ? filterCompare() : dataFilterResultName;

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            {dataHeader.map((item, index) => (
              <th key={ index }>{item}</th>
            ))}
          </tr>
        </thead>
        {tableRender.map((planet, index) => (
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
