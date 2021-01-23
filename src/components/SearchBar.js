import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchBar() {
  const { setFilters, filterByName, setFilterByName } = useContext(StarWarsContext);

  const handleInput = ({ target }) => {
    setFilterByName(target.value);
    setFilters({ filterByName: { name: filterByName } });
  };

  return (
    <label htmlFor="name-filter">
      Filtrar por nome:
      <input
        data-testid="name-filter"
        type="text"
        placeholder="Buscar planetas"
        value={ filterByName }
        onChange={ handleInput }
      />
    </label>
  );
}

export default SearchBar;
