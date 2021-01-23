import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filter() {
  const { handleChange } = useContext(StarWarsContext);
  return (
    <div>
      <input
        id="name-filter"
        type="text"
        data-testid="name-filter"
        onChange={ () => handleChange() }
        name="name-filter"
      />
    </div>
  );
}

export default Filter;
