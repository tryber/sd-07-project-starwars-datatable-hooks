import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const {
    data,
    filterDataByName,
    filter,
    filterDataByNumericValues,
    changeValuesToState,
    removeLastFilter,
  } = useContext(StarWarsContext);
  const { name } = filter.filterByName;
  const { nFilters } = filter;

  const renderRemovesButtons = () => {
    if (nFilters) {
      return (
        <div>
          { nFilters.map(({ column, comparison, value }, index) => (
            <div key={ index } data-testid="filter">
              { `Fitro: ${column} | ${comparison} | ${value}` }
              <button
                type="button"
                data-testid="filter"
                onClick={ removeLastFilter }
              >
                x
              </button>
            </div>
          )) }
        </div>
      );
    }
  };

  return (
    <div>
      <input
        data-testid="name-filter"
        onChange={ (event) => filterDataByName(event) }
        placeholder="Digite o nome do planeta"
      />
      <label htmlFor="column-filter">
        <select
          data-testid="column-filter"
          name="column"
          onChange={ changeValuesToState }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={ changeValuesToState }
        >
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
          <option value="menor que">menor que</option>
        </select>
      </label>
      <input
        type="number"
        name="value"
        data-testid="value-filter"
        onChange={ changeValuesToState }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ filterDataByNumericValues }
      >
        Filtrar
      </button>
      <div>
        {nFilters ? renderRemovesButtons() : null}
      </div>
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
          {data
            .filter((planet) => planet.name.includes(name))
            .map((planet) => (
              <tr key={ planet.name }>
                <td>{ planet.name }</td>
                <td>{ planet.rotation_period }</td>
                <td>{ planet.orbital_period }</td>
                <td>{ planet.diameter }</td>
                <td>{ planet.climate }</td>
                <td>{ planet.gravity }</td>
                <td>{ planet.terrain }</td>
                <td>{ planet.surface_water }</td>
                <td>{ planet.population }</td>
                <td>{ planet.films }</td>
                <td>{ planet.created }</td>
                <td>{ planet.edited }</td>
                <td>{ planet.url }</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
