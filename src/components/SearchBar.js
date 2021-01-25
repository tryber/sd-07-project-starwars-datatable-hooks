import React, { useContext } from 'react';
import StartWarsContext from '../context/StarWarsContext';

export default function SearchBar() {
  const { handleChanges } = useContext(StartWarsContext);

  return (
    <nav>
      <input
        type="search"
        name="searchBar"
        data-testid="name-filter"
        placeholder="Type a planet name"
        onChange={ handleChanges }
      />
    </nav>
  );
}
