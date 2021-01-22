import React, { useContext } from 'react';

import { StarWarsContext } from '../../context/StarWarsContext';

function NameFilter() {
  const { setFilters } = useContext(StarWarsContext);

  return (
    <input
      type="text"
      data-testid="name-filter"
      onChange={ ({ target }) => {
        setFilters({
          filtersByName: {
            name: target.value,
          },
        });
      } }
    />
  );
}

export default NameFilter;
