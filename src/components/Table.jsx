import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Table = () => {
  const { data: { results },
    filters: { filterByName: { name },
      filterByNumericValues,
      order,
    } } = useContext(StarWarsContext);

  let planetsToShow = results;

  if (name) {
    planetsToShow = results.filter((planet) => planet
      .name
      .toUpperCase()
      .includes(name.toUpperCase()));
  }
  filterByNumericValues.forEach(({ column, comparison, value }) => {
    if (comparison === 'maior que') {
      planetsToShow = planetsToShow
        .filter((planet) => (
          Number(planet[column]) > Number(value)
        ));
    } else if (comparison === 'menor que') {
      planetsToShow = planetsToShow
        .filter((planet) => (
          Number(planet[column]) < Number(value)
        ));
    } else if (comparison === 'igual a') {
      planetsToShow = planetsToShow
        .filter((planet) => (
          Number(planet[column]) === Number(value)
        ));
    }
  });

  const numericColumns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  // CONSEGUI COM A AJUDA DO GRANDE RAFAEL GUIMARÃES !!!! MUITO OBRIGADO, RAFA!!!!
  if (planetsToShow !== undefined) {
    planetsToShow.sort((a, b) => {
      const numberOne = 1;
      if (numericColumns.includes(order.column)) {
        if (order.sort === 'ASC') {
          return Number(a[order.column]) - Number(b[order.column]);
        }
        return Number(b[order.column]) - Number(a[order.column]);
      }
      if (order.sort === 'ASC') {
        return (a[order.column] > b[order.column] ? numberOne : -numberOne);
      }
      return (a[order.column] > b[order.column] ? -numberOne : numberOne);
    });
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
        )).sort()}
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
