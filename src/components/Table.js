import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { filters, handleName, handleForm, filterOptions } = useContext(
    StarWarsContext,
  );

  return (
    <div>
      <div>
        <input data-testid="name-filter" onChange={ handleName } type="text" />
      </div>
      <div>
        <select data-testid="column-filter" name="column" onChange={ handleForm }>
          <option value="">Column</option>
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </div>
      <div>
        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={ handleForm }
        >
          <option value="">Comparison</option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </div>
      <div>
        <input
          type="number"
          name="number"
          data-testid="value-filter"
          onChange={ handleForm }
          required
        />
      </div>
      <button type="button" data-testid="button-filter" onClick={ filterOptions }>
        Adicionar Filtro
      </button>
      <table>
        <thead>
          <tr>
            <th>climate</th>
            <th>created</th>
            <th>diameter</th>
            <th>edited</th>
            <th>gravity</th>
            <th>name</th>
            <th>orbital_period</th>
            <th>population</th>
            <th>rotation_period</th>
            <th>surface_water</th>
            <th>terrain</th>
            <th>url</th>
            <th>films</th>
          </tr>
        </thead>
        <tbody>
          {filters.map((planet, index) => (
            <tr key={ index }>
              <td>{planet.climate}</td>
              <td>{planet.created}</td>
              <td>{planet.diameter}</td>
              <td>{planet.edited}</td>
              <td>{planet.gravity}</td>
              <td>{planet.name}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.population}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.terrain}</td>
              <td>{planet.url}</td>
              <td>
                {planet.films.map((film, i) => (
                  <td key={ i }>{film}</td>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
