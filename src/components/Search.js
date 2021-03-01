import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Search() {
  const { searchByName, nameFilter } = useContext(StarWarsContext);
  return (
    <header>
      <span>Pesquisar: </span>
      <input
        data-testid="name-filter"
        type="text"
        value={ nameFilter }
        onChange={ (e) => searchByName(e) }
      />
    </header>
  );
}
