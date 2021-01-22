import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';
import Table from '../components/Table';

function StarWarsPlanets() {
  const { data, filter, dispatch } = useContext(StarWarsContext);
  const { name, column, comparison, value } = filter;

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
        <option value="population">population</option>
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
      <span data-testid="column-sorte" />
      <span data-testid="planet-name" />
      <Table planets={ data } />
    </div>
  );
}

export default StarWarsPlanets;
