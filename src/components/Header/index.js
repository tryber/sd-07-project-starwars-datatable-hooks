import React, { useContext } from 'react';

import StarWarsContext from '../../context/StarWarsContext';

function Header() {
  const { filters, changeInputsByName } = useContext(StarWarsContext);
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
    </div>
  );
}

export default Header;
