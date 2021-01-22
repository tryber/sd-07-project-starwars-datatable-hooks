import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FiltersInput() {
  const { handleFilterByName, handleFilterByValues } = useContext(StarWarsContext);

  const [filter, setFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

  const handleFilter = ({ target: { name, value } }) => {
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  const handleClick = () => {
    handleFilterByValues(filter);
  };

  return (
    <div>
      <label htmlFor="name-filter">
        Filter by name:
        <input
          id="name-filter"
          data-testid="name-filter"
          onChange={ (event) => handleFilterByName(event) }
        />
      </label>
      <fieldset>
        <legend>Others filters:</legend>
        <select
          data-testid="column-filter"
          name="column"
          onChange={ (event) => handleFilter(event) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={ (event) => handleFilter(event) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          data-testid="value-filter"
          name="value"
          onChange={ (event) => handleFilter(event) }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          Adicionar
        </button>
      </fieldset>
    </div>
  );
}

export default FiltersInput;
