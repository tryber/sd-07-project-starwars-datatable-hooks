import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchBar() {
  const { filterNameInput } = useContext(StarWarsContext);
  return (
    <form>
      <input type="text" data-testid='name-filter' onChange={ (event) => filterNameInput(event) } />
    </form>
  );
}

export default SearchBar;
