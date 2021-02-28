import React, { useContext } from 'react';
import Context from '../context/Context';

function Search() {
  const { search, setSearch } = useContext(Context);
  const { filters: { filterByName: { name } } } = search;

  function handleInput(value) {
    const objectInput = {
      ...search,
      filters: { ...search.filters,
        filterByName: { name: value } },
    };
    setSearch(objectInput);
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
