import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterText() {
  const { handlerChange } = useContext(StarWarsContext);

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        onChange={ handlerChange }
        name="name"
      />
    </div>
  );
}

export default FilterText;
