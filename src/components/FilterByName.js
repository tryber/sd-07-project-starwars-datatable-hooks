import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const FilterByName = () => {
  const { filters, setFilters } = useContext(StarWarsContext);

  const handleFilter = (({ target }) => {
    setFilters({
      filterByName: {
        name: target.value },
    });
  });

  return (
    <div>
      Digite sua busca:
      <input
        data-testid="name-filter"
        type="text"
        value={ filters.filterByName.name }
        onChange={ handleFilter }
      />
    </div>
  );
};

export default FilterByName;
