import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filter() {
  const { setFilterName } = useContext(StarWarsContext);

  const handleChange = ({ target }) => {
    setFilterName(target.value);
  };

  return (
    <div>
      <input
        onChange={ handleChange }
        type="text"
        data-testid="name-filter"
      />
    </div>
  );
}

export default Filter;
