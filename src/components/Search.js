import React, { useContext } from 'react';

import StarWarsContext from '../context/StarWarsContext';

function Search() {
  const { filters, setFilters } = useContext(StarWarsContext);

  const handleSearchByName = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: { name: value }
    });

  }

  return (
    <input
      type="text"
      onChange={ (e) => handleSearchByName(e) }
      data-testid='name-filter'
    />
  );
}

export default Search;
