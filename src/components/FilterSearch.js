import React, { useContext, useState, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import FilterByNumber from './FilterByNumber';

const FilterSearch = () => {
  const {
    changeFilterByName,
    filters: { filterByNumericValues },
    removeFilter,
  } = useContext(StarWarsContext);

  const zero = 0;
  const menosUm = -1;

  const columnData = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];

  const initialFilter = () => {
    if (filterByNumericValues.length > zero) {
      const arrayInContext = filterByNumericValues.map((e) => e.column);
      const newArray = columnData.filter((data) => {
        if (arrayInContext.indexOf(data) === menosUm) return data;
        return zero;
      });
      return newArray;
    }
    return columnData;
  };

  const [columnFilter, setColumnFilter] = useState(columnData);

  useEffect(() => {
    setColumnFilter(initialFilter());
  }, [filterByNumericValues]);

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
      <FilterByNumber columnFilter={ columnFilter } />
      <ul>
        {filterByNumericValues.length > zero
        && filterByNumericValues.map((filter) => (
          <li key={ filter.column } data-testid="filter">
            {`Filtro: 
            ${filter.column}
            ${filter.comparison}
            ${filter.value}`}
            <button type="button" onClick={ () => removeFilter(filter.column) }>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterSearch;
