import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchByName() {
  const { searchName, setsearchName } = useContext(StarWarsContext);
  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        value={ searchName }
        onChange={ ({ target }) => setsearchName(target.value) }
      />
    </div>
  );
}

export default SearchByName;
