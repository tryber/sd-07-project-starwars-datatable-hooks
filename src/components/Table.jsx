import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import './Table.css';

function Table() {
  const context = useContext(StarWarsContext); // obj {state: initialState, setState: fn}
  const { state, allContext } = context;
  const { filterName, filterNumber } = allContext;
  const { name } = filterName;
  const { data } = state;
  const { payload } = data;

  function secondFilter(planets, filter) {
    if (filter.comparison === 'maior que') {
      return planets.filter(
        (planet) => Number(planet[filter.column]) > Number(filter.value),
      );
    }
    if (filter.comparison === 'menor que') {
      return planets.filter(
        (planet) => Number(planet[filter.column]) < Number(filter.value),
      );
    }
    if (filter.comparison === 'igual a') {
      return planets.filter(
        (planet) => Number(planet[filter.column]) === Number(filter.value),
      );
    }
    return planets;
  }

  function RenderRows(value, nameValue) {
    const dois = 2;
    const zero = 0;
    if (value) {
      filterNumber.forEach((filter) => {
        value = secondFilter(value, filter);
      });
      return value
        .filter((element) => element.name.includes(nameValue))
        .map((planet, index) => (
          <tr key={ planet.name } className="tabela">
            <td className={ index % dois === zero ? 'Par' : '' }>{ planet.climate }</td>
            <td className={ index % dois === zero ? 'Par' : '' }>{ planet.created }</td>
            <td className={ index % dois === zero ? 'Par' : '' }>{ planet.diameter }</td>
            <td className={ index % dois === zero ? 'Par' : '' }>{ planet.edited }</td>
            <td className={ index % dois === zero ? 'Par' : '' }>{ planet.films }</td>
            <td className={ index % dois === zero ? 'Par' : '' }>{ planet.gravity }</td>
            <td className={ index % dois === zero ? 'Par' : '' }>{ planet.name }</td>
            <td className={ index % dois === zero ? 'Par' : '' }>
              { planet.orbital_period }
            </td>
            <td className={ index % dois === zero ? 'Par' : '' }>
              { planet.population }
            </td>
            <td className={ index % dois === zero ? 'Par' : '' }>
              { planet.rotation_period }
            </td>
            <td className={ index % dois === zero ? 'Par' : '' }>
              { planet.surface_water }
            </td>
            <td className={ index % dois === zero ? 'Par' : '' }>{ planet.terrain }</td>
            <td className={ index % dois === zero ? 'Par' : '' }>{ planet.url }</td>
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
