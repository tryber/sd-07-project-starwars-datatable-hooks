import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Table = () => {
  const { data: { results }, filters: { filterByName: { name }, filterByNumericValues } } = useContext(StarWarsContext);

  let planetsToShow = results;

  if (name) {
    planetsToShow = results.filter((planet) => planet
      .name
      .toUpperCase()
      .includes(name.toUpperCase()));
  } else if (filterByNumericValues.length !== 0) {
    if (filterByNumericValues[0].comparison === 'maior que') {
      planetsToShow = results
        .filter((planet) => (
          Number(planet[filterByNumericValues[0].column]) > filterByNumericValues[0].value
        ));
    } else if (filterByNumericValues[0].comparison === 'menor que') {
      planetsToShow = results
        .filter((planet) => (
          Number(planet[filterByNumericValues[0].column]) < Number(filterByNumericValues[0].value)
        ));
    } else {
      planetsToShow = results
        .filter((planet) => (
          Number(planet[filterByNumericValues[0].column]) === Number(filterByNumericValues[0].value)
        ));
    }
  }
  const returnPlanetsList = () => (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>rotation_period</th>
          <th>orbital_period</th>
          <th>diameter</th>
          <th>climate</th>
          <th>gravity</th>
          <th>terrain</th>
          <th>surface_water</th>
          <th>population</th>
          <th>films</th>
          <th>created</th>
          <th>edited</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>
        { planetsToShow.map((planet) => (
          <tr key={ planet.name }>
            {Object.keys(planet).filter((info) => info !== 'residents')
              .map((info) => (
                <td
                  key={ info }
                >
                  { planet[info] }
                </td>
              ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
  return (
    <div>
      {results === undefined ? 'loading'
        : returnPlanetsList()}
    </div>
  );
};

export default Table;
