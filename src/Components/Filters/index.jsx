import React, { useContext, useState, useEffect } from 'react';
import StarWarsContext from '../../Context/StarWarsContext';

const options = [
  <option key="population" value="population">population</option>,
  <option key="orbital_period" value="orbital_period">orbital_period</option>,
  <option key="diameter" value="diameter">diameter</option>,
  <option key="rotation_period" value="rotation_period">rotation_period</option>,
  <option key="surface_water" value="surface_water">surface_water</option>,
];

const empty = 0;

const Filters = () => {
  const {
    onFilter,
    availableFilters,
    filterByNumericValues,
    onRemoveFilter,
    onSort,
  } = useContext(StarWarsContext);

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');

  const [sortColumn, setSortColumn] = useState('name');
  const [sortOrder, setSortOrder] = useState('ASC');

  useEffect(() => { setColumn(availableFilters[0] || ''); }, [availableFilters]);

  const handleClickFilter = () => onFilter(column, comparison, value);

  const handleClickSort = () => onSort(sortColumn, sortOrder);

  return (
    <div>
      <h1>Filters</h1>
      <label htmlFor="column">
        Column
        <select
          name="column"
          id="column"
          data-testid="column-filter"
          value={ column }
          onChange={ (e) => setColumn(e.target.value) }
        >
          {
            options.filter((option) => availableFilters.includes(option.key))
          }
        </select>
      </label>

      <label htmlFor="comparison">
        Comparison
        <select
          name="comparison"
          id="comparison"
          data-testid="comparison-filter"
          value={ comparison }
          onChange={ (e) => setComparison(e.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
          <option value="menor que">menor que</option>
        </select>
      </label>

      <label htmlFor="value">
        Value
        <input
          name="value"
          id="value"
          type="number"
          data-testid="value-filter"
          value={ value }
          onChange={ (e) => setValue(e.target.value) }
        />
      </label>

      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClickFilter }
        disabled={ availableFilters.length === empty }
      >
        Filtrar
      </button>

      <div>
        <ul>
          {
            filterByNumericValues
              .map(({ column: COLUMN, comparison: COMPARISON, value: VALUE }, index) => (
                <li key={ COLUMN } data-testid="filter">
                  {`Filter ${index + 1}: ${COLUMN} ${COMPARISON} ${VALUE}`}
                  <button type="button" onClick={ () => onRemoveFilter(COLUMN) }>
                    X
                  </button>
                </li>
              ))
          }
        </ul>
      </div>

      <div>
        <label htmlFor="column_sort">
          Sort by
          <select
            name="column_sort"
            id="column_sort"
            data-testid="column-sort"
            value={ sortColumn }
            onChange={ (e) => setSortColumn(e.target.value) }
          >
            <option value="name">name</option>
            <option value="rotation_period">rotation_period</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="surface_water">surface_water</option>
            <option value="population">population</option>
          </select>
        </label>

        <label htmlFor="ascending">
          <input
            type="radio"
            id="ascending"
            name="sort_method"
            data-testid="column-sort-input-asc"
            value="ASC"
            checked={ sortOrder === 'ASC' }
            onChange={ (e) => setSortOrder(e.target.value) }
          />
          Ascending
        </label>
        <label htmlFor="descending">
          <input
            type="radio"
            id="descending"
            name="sort_method"
            data-testid="column-sort-input-desc"
            value="DESC"
            checked={ sortOrder === 'DESC' }
            onChange={ (e) => setSortOrder(e.target.value) }
          />
          Descending
        </label>

        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ handleClickSort }
        >
          Sort
        </button>
      </div>
    </div>
  );
};

export default Filters;
