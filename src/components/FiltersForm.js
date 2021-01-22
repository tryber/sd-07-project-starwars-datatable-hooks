import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FiltersForm() {
  const { handleTextChange, textInputValue } = useContext(StarWarsContext);
  return (
    <form>
      <label htmlFor="textFilter">
        Filter by text
        <input
          id="textFilter"
          type="text"
          placeholder="Search something"
          data-testid="name-filter"
          value={ textInputValue }
          onChange={ handleTextChange }
        />
      </label>
    </form>
  );
}

export default FiltersForm;
