import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

function NameFilter() {
  const { setNameFilter } = useContext(StarWarsContext);

  return (
    <input
      type="text"
      data-testid="name-filter"
      onChange={ ({ target }) => {
        setNameFilter({
          filtersByName: {
            name: target.value,
          },
        });
      } }
    />
  );
}
export default NameFilter;
