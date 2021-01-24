import React, { useContext } from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
import StarWarsContext from '../../context/StarWarsContext';

function Table() {
  const {
    planets,
    filters: { filterByName: { name } },
    filters: { filterByNumericValues },
  } = useContext(StarWarsContext);

  // créditos pro Vanderson Henrique pela lógica do switch/case
  const filterPlanetsBynumbers = () => {
    let planetFilter = planets;
    filterByNumericValues.forEach(({ column, comparison, value }) => {
      switch (comparison) {
      case 'maior que':
        planetFilter = planetFilter
          .filter((planet) => Number(planet[column]) > Number(value));
        break;
      case 'menor que':
        planetFilter = planetFilter
          .filter((planet) => Number(planet[column]) < Number(value));
        break;
      case 'igual a':
        planetFilter = planetFilter
          .filter((planet) => Number(planet[column]) === Number(value));
        break;
      default: return planetFilter;
      }
    });
    return planetFilter.filter((planet) => planet.name.includes(name));
  };

  return (
    <table>
      <TableHead />
      <tbody>
        {filterPlanetsBynumbers()
          .map((planet) => <TableBody key={ planet.name } data={ planet } />)}
      </tbody>
    </table>
  );
}

export default Table;
