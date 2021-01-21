import React, { useContext } from 'react';

import StarWarsContext from '../../context/StarWarsContext';

function Header() {
  const {
    filters,
    changeInputsByName,
    changeSelectColumn,
    changeSelectComparison,
    changeSelectValue,
    filterByNumericValues,
  } = useContext(StarWarsContext);

  const { filterByName: { name } } = filters;

  return (
    <div>
      <label htmlFor="name">
        Pesquisar por nome:
        <input
          data-testid="name-filter"
          name="name"
          id="name"
          value={ name }
          onChange={ (event) => changeInputsByName(event) }
        />
      </label>
      <div>
        Pesquisar por número de:
        <select
          name="column"
          data-testid="column-filter"
          onChange={ changeSelectColumn }
        >
          <option>selecione</option>
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select
          name="comparison"
          data-testid="comparison-filter"
          onChange={ changeSelectComparison }
        >
          <option>selecione</option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          name="value"
          type="number"
          data-testid="value-filter"
          onChange={ changeSelectValue }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ filterByNumericValues }
        >
          Pesquisar
        </button>
      </div>
    </div>
  );
}

export default Header;
