import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Search() {
  const { filters, setFilters } = useContext(StarWarsContext);
  const { name } = filters.filterByName;

  const handleChange = ({ target }) => {
    setFilters({ filterByName: {
      name: target.value,
    } });
  };

  return (
    <div>
      <label htmlFor="name-filter">
        <input
          type="text"
          id="name-filter"
          value={ name }
          placeholder="Search the Datatable"
          data-testid="name-filter"
          onChange={ handleChange }
        />
      </label>
    </div>
  );
}

export default Search;
