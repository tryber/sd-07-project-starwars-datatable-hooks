import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data } = useContext(StarWarsContext);
  const { planets, setPlanets, isLoading, filteringByName,
    filters, setFilters } = data;
  const { filterByName, filterByNumericValues } = filters;
  const [myPlanets] = useState(planets);
  const initialIndex = 0;
  const [myIndex, setMyIndex] = useState(initialIndex);
  const [renderFilters, setRenderFilters] = useState(false);
  const [myFilters, setMyFilters] = useState({
    column: '',
    comparison: '',
    value: '',
  });

  const filteringByNumericValues = ({ target }) => {
    const { column, comparison, value } = myFilters;
    const zero = 0;
    setMyFilters({
      ...myFilters,
      [target.name]: target.value,
    });
    if (column.length !== zero && comparison.length !== zero && value.length !== zero) {
      setRenderFilters(true);
      console.log(column.length);
    }
  };

  const onClickHandler = () => {
    const { column, comparison, value } = myFilters;
    if (column !== '' && comparison !== '' && value !== '') {
      setPlanets(planets.filter((planet) => {
        if (comparison === 'menor que') {
          setMyIndex(myIndex + 1);
          const myNewArr = filterByNumericValues.push(myFilters);
          setFilters({
            ...filters,
            filterByNumericValues: myNewArr,
          });
          return parseInt(value, 10) > parseInt(planet[column], 10);
        }
        if (comparison === 'maior que') {
          setMyIndex(myIndex + 1);
          const myNewArr = filterByNumericValues.push(myFilters);
          setFilters({
            ...filters,
            filterByNumericValues: myNewArr,
          });
          return parseInt(planet[column], 10) > parseInt(value, 10);
        }
        if (comparison === 'igual a') {
          setMyIndex(myIndex + 1);
          const myNewArr = filterByNumericValues.push(myFilters);
          setFilters({
            ...filters,
            filterByNumericValues: myNewArr,
          });
          return parseInt(planet[column], 10) === parseInt(value, 10);
        }
        return planet;
      }));
    }
    if (value === '') return setPlanets(myPlanets);
  };

  const renderNewFilter = () => {
    const arrOfColumns = ['population', 'orbital_period', 'diameter',
      'rotation_period', 'surface_water'];
    return (
      <div>
        <input
          type="text"
          data-testid="name-filter"
          onChange={ filteringByName }
        />
        <select
          name="column"
          data-testid="column-filter"
          onChange={ filteringByNumericValues }
        >
          {arrOfColumns.map((columns) => {
            const { column } = myFilters;
            if (columns !== column) {
              return (
                <option key={ columns } value={ `${columns}` }>
                  { columns }
                </option>
              );
            }
            return null;
          })}
        </select>
        <select
          name="comparison"
          data-testid="comparison-filter"
          onChange={ filteringByNumericValues }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          name="value"
          type="number"
          data-testid="value-filter"
          onChange={ filteringByNumericValues }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ onClickHandler }
        >
          Filtrar
        </button>
      </div>
    );
  };

  if (isLoading) {
    return <div>teste</div>;
  }
  return (
    <div>
      <div>
        <input
          type="text"
          data-testid="name-filter"
          onChange={ filteringByName }
        />
        <select
          name="column"
          data-testid="column-filter"
          onChange={ filteringByNumericValues }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select
          name="comparison"
          data-testid="comparison-filter"
          onChange={ filteringByNumericValues }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          name="value"
          type="number"
          data-testid="value-filter"
          onChange={ filteringByNumericValues }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ onClickHandler }
        >
          Filtrar
        </button>
        { renderFilters ? renderNewFilter() : null }
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Climate</th>
            <th>Created</th>
            <th>Diameter</th>
            <th>Edited</th>
            <th>Films</th>
            <th>Gravity</th>
            <th>Orbital Period</th>
            <th>Population</th>
            <th>Rotation Period</th>
            <th>Surface Water</th>
            <th>Terrain</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {planets
            .filter((planet) => planet.name.includes(filterByName.name))
            .map((planet, index) => {
              const maxOfColumns = 13;
              if (index > maxOfColumns) {
                return null;
              }
              return (
                <tr key={ planet.name }>
                  <td>{planet.name}</td>
                  <td>{planet.climate}</td>
                  <td>{planet.created}</td>
                  <td>{planet.diameter}</td>
                  <td>{planet.edited}</td>
                  <td>{planet.films}</td>
                  <td>{planet.gravity}</td>
                  <td>{planet.orbital_period}</td>
                  <td>{planet.population}</td>
                  <td>{planet.rotation_period}</td>
                  <td>{planet.surface_water}</td>
                  <td>{planet.terrain}</td>
                  <td>{planet.url}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
