import React from 'react';

function SearchBarName() {
  const handleChange = ({ target }) => {
    const currentValue = target.value;
    setSearchBarValue(currentValue);
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
