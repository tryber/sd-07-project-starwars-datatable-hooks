import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function FilterBar() {
  const {
    filters,
    filters: { filterByName: { name } },
    setFilters,
  } = useContext(StarWarsContext);

  const onChangeHandle = ({ target }) => {
    const { value } = target;
    setFilters({ ...filters, filterByName: { name: value } });
  };

  return (
    <div>
      <input
        type="text"
        value={ name }
        data-testid="name-filter"
        onChange={ onChangeHandle }
      />
    </div>
  );
}

export default FilterBar;
