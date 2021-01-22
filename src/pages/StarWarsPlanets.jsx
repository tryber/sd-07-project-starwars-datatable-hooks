import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';
import Table from '../components/Table';

function StarWarsPlanets() {
  const { data, filter, dispatch } = useContext(StarWarsContext);
  const { name, column, comparison, value, sortParameter } = filter;

  const handleChange = ({ target }) => {
    dispatch({ type: target.name, value: target.value });
  };

  return (
    <div className="star-wars-planets">
      <h1>Star Wars Planets</h1>
      Search:
      <input
        name="name"
        type="text"
        value={ name }
        onChange={ handleChange }
        data-testid="name-filter"
      />
      <select
        name="column"
        value={ column }
        data-testid="column-filter"
        onChange={ handleChange }
      >
        <option
          value="population"
          onChange={ (event) => event.target.remove() }
        >
          population
        </option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        name="comparison"
        value={ comparison }
        data-testid="comparison-filter"
        onChange={ handleChange }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        name="value"
        type="number"
        value={ value }
        data-testid="value-filter"
        onChange={ handleChange }
      />
      <button
        name="apply-filter"
        type="button"
        onClick={ handleChange }
        data-testid="button-filter"
      >
        Apply filter
      </button>
      <br />
      <br />
      Sort:
      <select
        name="ordenation"
        value={ sortParameter }
        data-testid="column-sort"
        onChange={ handleChange }
      >
        <option value="name">Name</option>
        <option value="rotation_period">Rotation period</option>
        <option value="orbital_period">Orbital period</option>
        <option value="diameter">Diameter</option>
        <option value="climate">Climate</option>
        <option value="gravity">Gravity</option>
        <option value="terrain">Terrain</option>
        <option value="surface_water">Surface water</option>
        <option value="population">Population</option>
        <option value="films">Films</option>
        <option value="created">Created</option>
        <option value="edited">Edited</option>
        <option value="url">URL</option>
      </select>
      <label htmlFor="asc">
        Crescent:
        <input
          name="sort"
          type="radio"
          value="asc"
          onClick={ handleChange }
          data-testid="column-sort-input-asc"
        />
      </label>
      <label htmlFor="desc">
        Decrescent:
        <input
          name="sort"
          type="radio"
          value="desc"
          onClick={ handleChange }
          data-testid="column-sort-input-desc"
        />
      </label>
      <button
        name="apply-sort"
        type="button"
        onClick={ handleChange }
        data-testid="column-sort-button"
      >
        Apply
      </button>
      <br />
      <br />
      <Table planets={ data } />
    </div>
  );
}

export default StarWarsPlanets;
