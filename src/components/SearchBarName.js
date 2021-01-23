import React, { useContext } from 'react';
import StarWarsContextfrom from '../context/StarWarsContext';

function SearchBarName() {
  const { searchBarValue, setSearchBarValue } = useContext(StarWarsContextfrom);

  const handleChange = ({ target: value }) => {
    setSearchBarValue(value);
  };

  return (
    <div>
      <label htmlFor="searchByName">
        name filter:
        <input
          type="text"
          name="serchByName"
          id="serchByName"
          data-testid="name-filter"
          value={ searchBarValue }
          onChange={ handleChange }
        />
      </label>
    </div>
  );
}

export default SearchBarName;
