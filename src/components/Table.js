import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const {
    filters,
    dataApi,
    setFilters,
    setNumeric,
    handleClick,
    resetFilter,
  } = useContext(StarWarsContext);

  const { filterByName } = filters;
  const { name } = filterByName;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>rotation_period</th>
            <th>orbital_period</th>
            <th>diameter</th>
            <th>climate</th>
            <th>gravity</th>
            <th>terrain</th>
            <th>surface_water</th>
            <th>population</th>
            <th>films</th>
            <th>created</th>
            <th>edited</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
          {dataApi
            .filter((planet) => planet.name.includes(name))
            .map((planet) => (
              <tr key={ planet.name }>
                <td>{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>{planet.films}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div data-testid="filter">
        <input
          data-testid="name-filter"
          onChange={ (e) => setFilters({
            filterByName: { name: e.target.value },
          }) }
          placeholder="Digite o nome do planeta"
        />
        <select
          data-testid="column-filter"
          onChange={ ({ target }) => setNumeric((prevState) => ({
            ...prevState,
            column: target.value,
          })) }
        >
          <option value="population">population</option>
          <option value="">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <button
          type="button"
          data-testid="filter"
          onClick={ resetFilter }
        >
          X
        </button>
        <select
          data-testid="comparison-filter"
          onChange={ ({ target }) => setNumeric((prevState) => ({
            ...prevState,
            comparison: target.value,
          })) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <button
          type="button"
          data-testid="filter"
          onClick={ resetFilter }
        >
          X
        </button>
        <input
          type="number"
          data-testid="value-filter"
          name="value"
          onChange={ ({ target }) => setNumeric((prevState) => ({
            ...prevState,
            value: target.value,
          })) }
        />
        <button
          type="button"
          data-testid="filter"
          onClick={ resetFilter }
        >
          X
        </button>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => handleClick() }
        >
          Filtrar
        </button>
      </div>
    </div>
  );
}

export default Table;
