import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import RowPlanet from './RowPlanet';
import Filter from './Filter';

function Planets() {
  const {
    fetchStarWars,
    isFetching,
    planets,
    filters,
  } = useContext(StarWarsContext);
  useEffect(() => {
    fetchStarWars();
  }, []);
  return (
    <div>
      <Filter />
      {isFetching && <span>Loading</span>}
      {!isFetching && (
        <table>
          <thead>
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
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {planets
              .filter(({ name }) => name
                .match(filters.filterByName.name))
              .filter((planet) => {
                let match = true;
                const { filterByNumericValues = [] } = filters;
                if (filterByNumericValues === []) return true;
                filterByNumericValues.forEach(({ column, comparison, value }) => {
                  switch (comparison) {
                  case 'maior que':
                    match = match && parseFloat(planet[column]) > value;
                    break;
                  case 'menor que':
                    match = match && parseFloat(planet[column]) < value;
                    break;
                  case 'igual a':
                    match = match && planet[column] === value;
                    break;
                  default:
                    match = true;
                  }
                });
                return match;
              })
              .map((planet) => <RowPlanet key={ planet.name } planet={ planet } />)}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Planets;
