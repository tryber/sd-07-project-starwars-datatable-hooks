import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, name, setFilters, filters } = useContext(StarWarsContext);

  const [orderRadio, setOrderRadio] = useState({
    column: 'name',
    sort: 'ASC',
  });

  const [aux, setAux] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

  const handleClick = () => {
    const { column, value } = aux;
    if (column && value) {
      setFilters({ ...filters,
        filterByNumericValues: [...filters.filterByNumericValues, aux] });
    }
  };

  const handleOrder = () => {
    setFilters({ ...filters,
      order: orderRadio });
  };

  const reset = (index) => {
    // remove do index um valor
    filters.filterByNumericValues.splice(index, 1);
    // mantem o estado atual e atualiza com o novo valor (removendo)
    setFilters({ ...filters,
      filterByNumericValues: [...filters.filterByNumericValues] });
  };

  return (
    <table>
      {/* {console.log(aux)} */}
      <select
        data-testid="column-filter"
        onChange={ (e) => setAux({ ...aux, column: (e.target.value) }) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select
        data-testid="comparison-filter"
        onChange={ (e) => setAux({ ...aux, comparison: (e.target.value) }) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        type="number"
        data-testid="value-filter"
        onChange={ (e) => setAux({ ...aux, value: (e.target.value) }) }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClick() }
      >
        Filtro
      </button>

      <select
        data-testid="column-sort"
        onChange={ (e) => setOrderRadio({ ...orderRadio, column: (e.target.value) }) }
      >
        <option value="name">Name</option>
        <option value="rotation_period">Rotation Period</option>
        <option value="orbital_period">Orbital Period</option>
        <option value="diameter">Diameter</option>
        <option value="climate">Climate</option>
        <option value="gravity">Gravity</option>
        <option value="terrain">Terrain</option>
        <option value="surface_water">Surface Water</option>
        <option value="population">Population</option>
        <option value="films">Films</option>
        <option value="created">Created</option>
        <option value="edited">Edited</option>
        <option value="url">URL</option>
      </select>

      <label htmlFor="ASC">
        <input
          type="radio"
          data-testid="column-sort-input-asc"
          name="order"
          value="ASC"
          onClick={ (event) => setOrderRadio({
            ...orderRadio, sort: (event.target.value) }) }
        />
        ASC
      </label>

      <label htmlFor="DESC">
        <input
          type="radio"
          data-testid="column-sort-input-desc"
          name="order"
          value="DESC"
          onClick={ (event) => setOrderRadio({
            ...orderRadio, sort: (event.target.value) }) }
        />
        DESC
      </label>

      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => handleOrder() }
      >
        Ordenar
      </button>

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
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {
          data ? data.filter((element) => element.name.toLowerCase().includes(name))
            .map((planet) => (
              <tr key={ planet.name }>
                <td data-testid="planet-name">{planet.name}</td>
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
            )) : <span>Loading...</span>

        }
      </tbody>
      <div>
        { filters.filterByNumericValues
          .map((element, index) => (
            <p key={ index } data-testid="filter">
              <span><b>Filtro aplicado: </b></span>
              <span>{ element.column }</span>
              <span> - </span>
              <span>{ element.comparison }</span>
              <span> - </span>
              <span>{ element.value }</span>
              <span> </span>
              <button
                type="button"
                name="button"
                onClick={ () => reset(index) }
              >
                X
              </button>
            </p>
          )) }
        <br />
      </div>
    </table>
  );
}

export default Table;
