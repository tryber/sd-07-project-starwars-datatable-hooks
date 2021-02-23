import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterName() {
  const { setName } = useContext(StarWarsContext);

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        name="filter"
        onChange={ (event) => setName(event.target.value) }
      />
    </div>
  );
}

export default FilterName;
