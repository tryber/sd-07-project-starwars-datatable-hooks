import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Form() {
  const { filters: { filterByName: { name } }, functions } = useContext(StarWarsContext);
  return (
    <div>
      <label htmlFor="filter-by-name">
        Filter By Name:
        <input
          id="filter-by-name"
          value={ name }
          type="text"
          data-testid="name-filter"
          onChange={ functions.onHandleChange }
        />
      </label>
    </div>
  );
}

export default Form;
