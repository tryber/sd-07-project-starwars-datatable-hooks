import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function Filter() {
  const { filters, setFilters } = useContext(StarWarsContext);

  function handleChange({ target }) {
    const { value } = target;
    setFilters({ filters: { filterByName: { name: value } } });
  }

  return (
    <div>
      <input
        type="text"
        value={ filters.filters.filterByName.name }
        onChange={ (e) => handleChange(e) }
        data-testid="name-filter"
      />
    </div>
  );
}

export default Filter;
