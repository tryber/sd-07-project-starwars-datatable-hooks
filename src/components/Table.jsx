import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const context = useContext(StarWarsContext); // obj {state: initialState, setState: fn}
  const { state, allContext } = context;
  const { filterName, filterNumber } = allContext;
  const { name } = filterName;
  const { data } = state;
  const { payload } = data;

  function secondFilter(planets, filter) {
    if (filter.comparison === 'maior que') {
      return planets
        .filter((planet) => Number(planet[filter.column]) > Number(filter.value));
    } if (filter.comparison === 'menor que') {
      return planets
        .filter((planet) => Number(planet[filter.column]) < Number(filter.value));
    } if (filter.comparison === 'igual a') {
      return planets
        .filter((planet) => Number(planet[filter.column]) === Number(filter.value));
    }
    return planets;
  }

  function RenderRows(value, nameValue) {
    if (value) {
      filterNumber.forEach((filter) => {
        value = secondFilter(value, filter);
      });
      return value
        .filter((element) => element.name.includes(nameValue))
        .map((planet) => (
          <tr key={ planet.name }>
            <td>{planet.climate}</td>
            <td>{planet.created}</td>
            <td>{planet.diameter}</td>
            <td>{planet.edited}</td>
            <td>{planet.films}</td>
            <td>{planet.gravity}</td>
            <td>{planet.name}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.population}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.terrain}</td>
            <td>{planet.url}</td>
          </tr>
        ));
    }
  }

  useEffect(() => {
    RenderRows(payload, name);
  }, [payload, name]);

  return <>{RenderRows(payload, name)}</>;
}

export default Table;
