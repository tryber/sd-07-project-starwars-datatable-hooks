import React, { useContext, useState, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const arrayOfOptions = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const {
    data,
    filterDataByName,
    filter,
    filterDataByNumericValues,
    changeValuesToState,
    removeFilterDataByNumericValues,
    changeSortValuesToState,
    setOrder,
  } = useContext(StarWarsContext);

  const [arrayOfUsedFilters, setFilter] = useState([filter.nFilters]);

  const generateArrayOfOptions = () => {
    const filtersArray = filter.nFilters.map((fil) => fil.column);
    setFilter(filtersArray);
  };

  useEffect(() => {
    generateArrayOfOptions();
  }, [filter.nFilters.length]);

  const { name } = filter.filterByName;
  const { nFilters } = filter;

  const renderRemovesButtons = () => {
    if (nFilters) {
      return (
        <div>
          { nFilters.map(({ column, comparison, value }, index) => (
            <div key={ index } data-testid="filter">
              { `Fitro: ${column} | ${comparison} | ${value}`}
              <button
                type="button"
                data-testid="filter"
                value={ column }
                onClick={ (event) => removeFilterDataByNumericValues(event) }
              >
                x
              </button>
            </div>
          ))}
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
          {arrayOfOptions.filter((col) => !arrayOfUsedFilters.includes(col))
            .map((col) => (<option key={ col } value={ col }>{ col }</option>
            ))}
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
      <label htmlFor="column-sort">
        Ordenar por
        <select
          data-testid="column-sort"
          name="column"
          onChange={ (e) => changeSortValuesToState(e) }
        >
          {arrayOfOptions
            .map((option) => (
              <option
                key={ option }
                value={ option }
                name="column"
              >
                { option }
              </option>))}
        </select>
      </label>
      <label htmlFor="asc">
        ASC
        <input
          required
          data-testid="column-sort-input-asc"
          type="radio"
          id="asc"
          name="sort"
          value="ASC"
          onChange={ (e) => changeSortValuesToState(e) }
        />
      </label>
      <label htmlFor="desc">
        DESC
        <input
          required
          data-testid="column-sort-input-desc"
          type="radio"
          id="desc"
          name="sort"
          value="DESC"
          onChange={ (e) => changeSortValuesToState(e) }
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
      >
        Ordenar
      </button>
      <div>
        { nFilters ? renderRemovesButtons() : null }
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
            .sort(setOrder)
            .map((planet) => (
              <tr key={ planet.name }>
                <td data-testid="planet-name">{ planet.name }</td>
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
