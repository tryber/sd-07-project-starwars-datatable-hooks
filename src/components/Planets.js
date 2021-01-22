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
              .map((planet) => <RowPlanet key={ planet.name } planet={ planet } />)}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Planets;
