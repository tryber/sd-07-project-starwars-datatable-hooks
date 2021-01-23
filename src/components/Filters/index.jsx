import React, { useContext } from 'react';

import StarWarsContext from '../../context/StarWarsContext';

function Filters() {
  const { filters, setFilters } = useContext(StarWarsContext);
  const { filters: { filterByName: { name } } } = filters;

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        value={ name }
        onChange={ (e) => {
          setFilters({ filters: { filterByName: { name: e.target.value } } });
        } }
      />
    </div>
  );
}

export default Filters;
