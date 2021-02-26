import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function FilterByName() {
  const { filters, setFilters } = useContext(StarWarsContext);
  const handleName = ({ target }) => {
    setFilters({ ...filters, filterByName: { name: target.value } });
  };
  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handleName }
      />
    </div>
  );
}

export default FilterByName;
