import React, { useContext, useEffect } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';
import getPlanets from '../service/starWarsAPI';

function Table() {
  const {
    data,
    filters,
    setData,
  } = useContext(StarWarsContext);
  useEffect(() => {
    (async () => {
      const response = await getPlanets();
      setData(response);
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const filterName = (planet) => {
    const nameFilter = filters.filtersByName.name !== '';
    const filter = filters.filtersByName.name.toLowerCase();
    return nameFilter
      ? planet.name.toLowerCase().includes(filter)
      : planet;
  };

  const filterNumber = () => {
    const { filterByNumericValues } = filters;
    let filteredResults = data.results;
    filterByNumericValues.forEach((_, index) => {
      filteredResults = filteredResults.filter((planet) => {
        const { column, comparison, value } = filterByNumericValues[index];
        switch (comparison) {
        case 'maior que':
          return parseFloat(planet[column]) > parseFloat(value);
        case 'igual a':
          return parseFloat(planet[column]) === parseFloat(value);
        case 'menor que':
          return parseFloat(planet[column]) < parseFloat(value);
        default:
          return planet;
        }
      });
    });
    return filteredResults;
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>Url</th>
        </tr>
      </thead>
      <tbody>
        {filterNumber()
          .filter(filterName)
          .map((planet) => {
            const {
              name,
              rotation_period: rotationPeriod,
              orbital_period: orbitalPeriod,
              diameter,
              climate,
              gravity,
              terrain,
              surface_water: surfaceWater,
              population,
              films,
              created,
              edited,
              url,
            } = planet;
            return (
              <tr key={ name }>
                <td>{name}</td>
                <td>{rotationPeriod}</td>
                <td>{orbitalPeriod}</td>
                <td>{diameter}</td>
                <td>{climate}</td>
                <td>{gravity}</td>
                <td>{terrain}</td>
                <td>{surfaceWater}</td>
                <td>{population}</td>
                <td>{films}</td>
                <td>{created}</td>
                <td>{edited}</td>
                <td>{url}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default Table;
