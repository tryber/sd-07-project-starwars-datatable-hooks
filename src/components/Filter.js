import React, { useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filter() {
  const { setFilters } = useState(StarWarsContext);
  
  function handleChange({ target }) {
    const { value } = target;
    setFilters({
      filters: {
        filterByName: {
          name: value,
        },
      },
    }),
  }

  return (
    <div>
      <input type="text" onChange={ () => handleChange() } />
    </div>
  );

}

export default Filter;
