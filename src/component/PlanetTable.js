import React, { useContext } from 'react';

import StarWarsContext from '../context/starWarsContext';

function PlanetTable() {
  const { filterPlanets, sorted, sortedSelect } = useContext(StarWarsContext);

  let sortedPlanets = [];
  // sortedPlanets = filterPlanets.sort((a, b) => {
  //   if (a.name > b.name) {
  //     return 1;
  //   }
  //   if (a.name < b.name) {
  //     return -1;
  //   }
  //   // a must be equal to b
  //   return 0;
  // });

  // função se for só strings
  // console.log('SwitchSortedTable:', sorted, sortedSelect);
  // const menosUm = -1;
  // const zero = 0;
  // switch (sorted) {
  // case 'asc':
  //   console.log('case asc');
  //   sortedPlanets = filterPlanets.sort((a, b) => {
  //     if (a[sortedSelect] > b[sortedSelect]) {
  //       return 1;
  //     }
  //     if (a[sortedSelect] < b[sortedSelect]) {
  //       return menosUm;
  //     }
  //     // a must be equal to b
  //     return zero;
  //   });
  //   break;
  // case 'desc':
  //   console.log('case desc');
  //   sortedPlanets = filterPlanets.sort((a, b) => {
  //     if (a[sortedSelect] > b[sortedSelect]) {
  //       return menosUm;
  //     }
  //     if (a[sortedSelect] < b[sortedSelect]) {
  //       return 1;
  //     }
  //     // a must be equal to b
  //     return zero;
  //   });
  //   break;
  // default:
  //   console.log('default');
  //   sortedPlanets = filterPlanets;
  // }

  // função para todos casos
  console.log('SwitchSortedTable:', sorted, sortedSelect);
  const menosUm = -1;
  const zero = 0;
  switch (sorted) {
  case 'asc':
    console.log('case asc');
    sortedPlanets = filterPlanets.sort((a, b) => a[sortedSelect] - b[sortedSelect]);
    break;
  case 'desc':
    console.log('case desc');
    sortedPlanets = filterPlanets.sort((a, b) => b[sortedSelect] - a[sortedSelect]);
    break;
  default:
    console.log('default');
    // sortedPlanets = filterPlanets;
    sortedPlanets = filterPlanets.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return menosUm;
      }
      // a must be equal to b
      return zero;
    });
  }

  // console.log('tabela', sortedPlanets);
  // if (filterPlanets.length === 0) {
  //   return 'loading';
  // }
  return (
    <div>
      <p>Planetas</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
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
          {sortedPlanets.map((planet) => (
            <tr key={ planet.name }>
              <td data-testid="planet-name">{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlanetTable;
