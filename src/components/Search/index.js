import React, { useContext } from 'react';
import context from '../../context';

const Search = () => {
  const { filters, changeFiltersName } = useContext(context);
  const { name } = filters.filterByName;
  return (
    <div>
      <label htmlFor="search">
        Digite uma expressão
        <input
          type="text"
          id="search"
          data-testid="name-filter"
          value={ name }
          onChange={ (event) => changeFiltersName(event.target.value) }
        />
      </label>
    </div>
  );
};

export default Search;
