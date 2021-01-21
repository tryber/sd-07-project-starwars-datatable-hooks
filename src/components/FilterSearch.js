import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const FilterSearch = () => {
  const { changeFilterByName } = useContext(StarWarsContext);
  return (
    <div>
      <label htmlFor="filterByName">
        Pesquisa por nome:
        { ' ' }
        <input
          data-testid="name-filter"
          type="text"
          id="filterByName"
          onChange={ ({ target }) => changeFilterByName(target.value) }
        />
      </label>
    </div>
  );
};

export default FilterSearch;
