import React, { useState, useContext, useEffect } from 'react';
import StarWarsContext from '../../context/StarWarsContext';
import { TableHeader, TableData } from './styles';

function Table() {
  const [planets, setPlanets] = useState([]);

  const { data, globalState } = useContext(StarWarsContext);

  useEffect(() => {
    if (globalState.filters.filterByName.name !== '') {
      console.log('entrei');
      const zero = 0;
      const planetsFilteredByName = data.filter((planet) => (
        planet.name.includes(globalState.filters.filterByName.name)
      ));
      console.log(`Global: ${globalState}`);
      const { filters } = globalState;
      console.log(`Filters: ${filters}`);
      const { filterByNumericValues } = filters;
      console.log(`Filter By NUmeric Values: ${filterByNumericValues}`);
      if (filterByNumericValues.length !== zero) {
        const planetsFiltered = planetsFilteredByName.filter((planet) => {
          switch (filterByNumericValues.comparison) {
          case 'menor que':
            return planet[filterByNumericValues.column] < filterByNumericValues.value;
          case 'maior que':
            return planet[filterByNumericValues.column] > filterByNumericValues.value;
          case 'igual a':
            return planet[filterByNumericValues.column] === filterByNumericValues.value;
          default:
            return null;
          }
        });
        setPlanets(planetsFiltered);
      } else {
        setPlanets(planetsFilteredByName);
      }
    } else {
      setPlanets(data);
    }
  }, [globalState, data]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <TableHeader>Name</TableHeader>
            <TableHeader>Rotation period</TableHeader>
            <TableHeader>Orbital period</TableHeader>
            <TableHeader>Diameter</TableHeader>
            <TableHeader>Climate</TableHeader>
            <TableHeader>Gravity</TableHeader>
            <TableHeader>Terrain</TableHeader>
            <TableHeader>Surface Water</TableHeader>
            <TableHeader>Population</TableHeader>
            <TableHeader>Films</TableHeader>
            <TableHeader>Created</TableHeader>
            <TableHeader>Edited</TableHeader>
            <TableHeader>URL</TableHeader>
          </tr>
        </thead>
        <tbody>
          {planets.map((planet) => (
            <tr key={ planet.name }>
              <TableData>{ planet.name }</TableData>
              <TableData>{ planet.rotation_period }</TableData>
              <TableData>{ planet.orbital_period }</TableData>
              <TableData>{ planet.diameter }</TableData>
              <TableData>{ planet.climate }</TableData>
              <TableData>{ planet.gravity }</TableData>
              <TableData>{ planet.terrain }</TableData>
              <TableData>{ planet.surface_water }</TableData>
              <TableData>{ planet.population }</TableData>
              <TableData>{ planet.films }</TableData>
              <TableData>{ planet.created }</TableData>
              <TableData>{ planet.edited }</TableData>
              <TableData>{ planet.url }</TableData>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
