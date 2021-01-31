import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Table = () => {
  const { data: { results },
    filters: { filterByName: { name },
      filterByNumericValues,
      // filterByNumericValues: { column },
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
    } else {
      planetsToShow = planetsToShow
        .filter((planet) => (
          Number(planet[column]) === Number(value)
        ));
    }
  });

  const returnPlanetsList = () => (
    <table>
      <thead>
        <tr>
          {results
            ? Object.keys(results[0])
              .filter((column) => column !== 'residents')
              .map((column) => <td key={ column }>{column}</td>)
            : 'loading'}
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
