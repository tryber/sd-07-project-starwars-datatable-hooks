import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import filterCompare from '../hooks/hookFIlter';

function Table() {
  const { data, filters, dataHeader, filter, filter2 } = useContext(StarWarsContext);

  const { filterByName, filterByNumericValues } = filters;
  const { comparison, column, value } = filterByNumericValues[0];

  const dataFilterResultName = data.filter(
    (planet) => planet.name.toLowerCase().includes(filterByName.name.toLowerCase()),
  ) || [];

  const tableRender = filter
    ? filterCompare(comparison, dataFilterResultName, column, value)
    : dataFilterResultName;

  const checkPrimaryFilter = filterByNumericValues[1].column !== ''
    && filterByNumericValues[1].value !== ''
    && filterByNumericValues[1].comparison !== '';

  const secondFilter = checkPrimaryFilter && filter2
    ? filterCompare(filterByNumericValues[1].comparison,
      tableRender,
      filterByNumericValues[1].column,
      filterByNumericValues[1].value)
    : tableRender;

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
        {secondFilter.map((planet, index) => (
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
