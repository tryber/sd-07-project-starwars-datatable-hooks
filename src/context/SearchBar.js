import React, { useContext } from 'react';
import StarWarsContext from './StarWarsContext';

function SearchBar() {
  const { setFilterText } = useContext(StarWarsContext);
  return (
    <input
      type="text"
      name="search"
      onChange={ ((event) => setFilterText(event.target.value)) }
      data-testid="name-filter"
    />
  );
}

export default SearchBar;
