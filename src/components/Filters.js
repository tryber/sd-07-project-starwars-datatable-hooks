import React, { useContext, useEffect, useState } from 'react';
import { filterContext } from '../contexts/FilterContext';
import headers from '../services/headers';

const Filters = () => {
  const { filterActions } = useContext(filterContext);
  const {
    nameFilter,
    setNameFilter,
    columnFilter,
    setColumnFilter,
    comparisonFilter,
    setComparisonFilter,
    valueFilter,
    setValueFilter,
    filtersState,
    setFiltersState,
    sortOptionFilter,
    setSortOptionFilter,
    columnSortFilter,
    setColumnSortFilter,
    setSortFilter,
    activeFilters,
    setActiveFilters,
  } = filterActions;
  const [showFilters, setShowFilters] = useState({
    message: '',
    show: false,
  });

  function handleFilters() {
    setFiltersState({
      filters: {
        filterByName: {
          name: nameFilter,
        },
        filterByNumericValue: {
          column: columnFilter,
          comparison: comparisonFilter,
          value: valueFilter,
        },
      },
    });
    setActiveFilters(true);
  }

  useEffect(() => {
    const { filterByNumericValue } = filterActions.filtersState.filters;
    if (filterByNumericValue) {
      const { column, comparison, value } = filterByNumericValue;
      setShowFilters({
        message: `${column} ${comparison} ${value}`,
        show: true,
      });
    }
  }, [filtersState, activeFilters]);

  function clearFilters() {
    setActiveFilters(false);
    setShowFilters({
      message: '',
      show: false,
    });
  }

  function handleSortFilter() {
    setSortFilter({
      ...filtersState,
      filters: {
        order: {
          column: columnSortFilter,
          sort: sortOptionFilter,
        },
      },
      sorted: true,
    });
  }

  function renderFilters() {
    if (showFilters.show) {
      return (
        <h4 data-testid="filter">
          {showFilters.message}
          <button type="button" onClick={ clearFilters }>X</button>
        </h4>
      );
    }
    return <p>no filters</p>;
  }

  return (
    <div className="filters">
      <input
        type="text"
        data-testid="name-filter"
        placeholder="planet name filter"
        value={ nameFilter }
        onChange={ (e) => setNameFilter(e.target.value) }
      />
      <select
        data-testid="column-filter"
        value={ columnFilter }
        onChange={ (e) => setColumnFilter(e.target.value) }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        value={ comparisonFilter }
        onChange={ (e) => setComparisonFilter(e.target.value) }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        type="number"
        placeholder="valor"
        data-testid="value-filter"
        value={ valueFilter }
        onChange={ (e) => setValueFilter(e.target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleFilters }
      >
        aplicar filtros
      </button>
      <select
        data-testid="column-sort"
        onChange={ (e) => setColumnSortFilter(e.target.value) }
      >
        {headers.map((header) => (
          <option key={ header }>{header}</option>
        ))}
      </select>
      <input
        type="radio"
        name="list-order"
        data-testid="column-sort-input-asc"
        value="ASC"
        onChange={ (e) => setSortOptionFilter(e.target.value) }
      />
      <span>asc</span>
      <input
        type="radio"
        name="list-order"
        data-testid="column-sort-input-desc"
        value="DESC"
        onChange={ (e) => setSortOptionFilter(e.target.value) }
      />
      <span>desc</span>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ handleSortFilter }
      >
        sort
      </button>
      {renderFilters()}
    </div>
  );
};

export default Filters;
