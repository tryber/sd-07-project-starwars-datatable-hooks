import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const context = useContext(StarWarsContext); // obj {state: initialState, setState: fn}
  const { state } = context;
  const { data } = state;
  const { payload } = data;

  function RenderRows(value) {
    if (value) {
      return value.map((planet) => (
        <tr key={ planet.name }>
          <td>{ planet.climate }</td>
          <td>{ planet.created }</td>
          <td>{ planet.diameter }</td>
          <td>{ planet.edited }</td>
          <td>{ planet.films }</td>
          <td>{ planet.gravity }</td>
          <td>{ planet.name }</td>
          <td>{ planet.orbital_period }</td>
          <td>{ planet.population }</td>
          <td>{ planet.rotation_period }</td>
          <td>{ planet.surface_water }</td>
          <td>{ planet.terrain }</td>
          <td>{ planet.url }</td>
        </tr>
      ));
    }
  }

  useEffect(() => {
    RenderRows(payload);
  }, [payload]);

  return <>{RenderRows(payload)}</>;
}

export default Table;
