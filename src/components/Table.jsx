import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const context = useContext(StarWarsContext); // obj {state: initialState, setState: fn}
  const { state, filtersByName } = context;
  const { data } = state;
  const { payload } = data;

  function RenderRows(value, filterName) {
    if (value) {
      return value
        .filter((element) => element.name.includes(filterName))
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
    RenderRows(payload, filtersByName);
  }, [payload, filtersByName]);

  return <>{RenderRows(payload, filtersByName)}</>;
}

export default Table;
