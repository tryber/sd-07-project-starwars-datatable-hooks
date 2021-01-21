import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function Header() {
  const { setSearch } = useContext(StarWarsContext);
  return (
    <header>
      <input
        type="text"
        name="name"
        id="name"
        data-testid="name-filter"
        onChange={ (e) => setSearch(e.target.value) }
      />
    </header>
  );
}

export default Header;
