import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import FilterByNumber from './FilterByNumber';

const FilterSearch = () => {
  const columnData = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];

  const [columnFilter, setColumnFilter] = useState(columnData);
  const zero = 0;

  const {
    changeFilterByName,
    filters: { filterByNumericValues },
  } = useContext(StarWarsContext);

  const removeOption = (column) => {
    setColumnFilter(columnFilter.filter((option) => option !== column));
  };

  return (
    <div>
      <label htmlFor="filterByName">
        Pesquisa por nome:
        { ' ' }
        <input
          data-testid="name-filter"
          type="text"
          id="filterByName"
          onChange={ ({ target }) => changeFilterByName(target.value) }
        />
      </label>
      <FilterByNumber removeOption={ removeOption } columnFilter={ columnFilter } />
      <ul>
        {filterByNumericValues.length > zero
        && filterByNumericValues.map((filter) => (
          <li key={ filter.column }>
            {`Filtro: 
            ${filter.column}
            ${filter.comparison}
            ${filter.value}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterSearch;
