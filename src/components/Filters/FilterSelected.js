import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function FilterSelected() {
  const { filters:
    { filterByNumericValues }, setFilters, filters } = useContext(StarWarsContext);

  const deleteFilter = (filterToRemove) => {
    setFilters({ ...filters,
      filterByNumericValues:
        filterByNumericValues.filter((savedFilter) => savedFilter !== filterToRemove) });
  };

  return (
    <div>
      { filterByNumericValues.map((filter, index) => (
        <div key={ index } data-testid="filter">
          <p>{filter.column}</p>
          <p>{filter.comparison}</p>
          <p>{filter.value}</p>
          <button type="button" onClick={ () => deleteFilter(filter) }>X</button>
        </div>))}
    </div>
  );
}

export default FilterSelected;
