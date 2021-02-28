import React, { useContext } from 'react';
import Context from '../context/Context';

function Search() {
  const { searchTerm, setSearchTerm } = useContext(Context);
  const { filters: { filterByName: { name } } } = searchTerm;

  function handleInput(value) {
    const objectInput = {
      ...searchTerm,
      filters: { ...searchTerm.filters,
        filterByName: { name: value } },
    };
    setSearchTerm(objectInput);
  }
  return (
    <div>
      <p>Search</p>
      <input
        type="text"
        name="search"
        data-testid="name-filter"
        value={ name }
        onChange={ (e) => handleInput(e.target.value) }
      />
    </div>
  );
}

export default Search;
