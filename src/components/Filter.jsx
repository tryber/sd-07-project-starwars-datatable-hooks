import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Filter = () => {
  const { filters, setFilters } = useContext(StarWarsContext);
  const [currNumFilter, setCurrNumFilter] = useState({
    column: '',
    comparison: '',
    value: '',
  });
  const [currSortFilter, setCurrSortFilter] = useState({
    column: '',
    sort: '',
  });
  const { setSorted } = useContext(StarWarsContext);
  const { setFilteredByNum } = useContext(StarWarsContext);
  const columns = ['name', 'rotation_period', 'orbital_period',
    'diameter', 'climate', 'gravity', 'terrain', 'surface_water',
    'population', 'residents', 'films', 'created', 'edited'];

  const sendCurrentSearch = (e) => {
    const text = e.target.value;
    setFilters({ ...filters, filterByName: { name: text } });
  };

  useEffect(() => {
  });

  const removeFilter = (ev) => {
    ev.target.parentNode.remove();
    setFilteredByNum(false);
    setFilters({
      ...filters,
      filterByNumericValues: [],
    });
  };

  const sendNumericFilter = (e) => {
    e.preventDefault();
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        currNumFilter,
      ],
    });
    // meu deus prq que tô usando js vanilla nessa altura do campeonato...não sei
    const filterList = document.getElementById('filter-list');
    const newFilterItem = document.createElement('li');
    const btn = document.createElement('button');
    btn.innerText = 'X';
    btn.addEventListener('click', (ev) => removeFilter(ev));
    const filtersText = document.createElement('p');
    filtersText.innerHTML = `
    ${currNumFilter.column} 
    ${currNumFilter.comparison} 
    ${currNumFilter.value}`;
    newFilterItem.setAttribute('data-testid', 'filter');
    newFilterItem.appendChild(filtersText);
    newFilterItem.appendChild(btn);
    filterList.append(newFilterItem);
  };

  const sendSortFilter = () => {
    setSorted(true);
    setFilters({
      ...filters,
      order: {
        ...currSortFilter,
      },
    });
  };

  const handleNumericFilterChange = (e) => {
    const { value } = e.target;
    setCurrNumFilter({
      ...currNumFilter,
      [e.target.name]: value,
    });
    console.log('handleNumericFilterChange');
  };

  const handleSortFilterChange = (e) => {
    const { value } = e.target;
    setCurrSortFilter({
      ...currSortFilter,
      [e.target.name]: value,
    });
  };

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ (e) => sendCurrentSearch(e) }
      />
      <form>
        <select
          data-testid="column-filter"
          name="column"
          value={ currNumFilter.column }
          onChange={ (e) => handleNumericFilterChange(e) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select
          data-testid="comparison-filter"
          name="comparison"
          value={ currNumFilter.comparison }
          onChange={ (e) => handleNumericFilterChange(e) }
        >
          <option value="maior que" name="maior que">maior que</option>
          <option value="menor que" name="menor que">menor que</option>
          <option value="igual a" name="igual a">igual a</option>
        </select>
        <input
          data-testid="value-filter"
          type="number"
          name="value"
          value={ currNumFilter.value }
          onChange={ (e) => handleNumericFilterChange(e) }
        />
        <button
          type="submit"
          data-testid="button-filter"
          onClick={ sendNumericFilter }
        >
          Filtrar
        </button>
      </form>
      <form>
        <select
          data-testid="column-sort"
          id="order-select"
          onChange={ (e) => handleSortFilterChange(e) }
          name="column"
        >
          {columns.map((column, i) => (
            <option
              key={ i }
              value={ column }
            >
              {column}
            </option>))}
        </select>
        <label htmlFor="column-sort-input-asc">
          <input
            type="radio"
            id="column-sort-input-asc"
            data-testid="column-sort-input-asc"
            value="ASC"
            name="sort"
            onChange={ (e) => handleSortFilterChange(e) }
          />
          ASC
        </label>
        <label htmlFor="column-sort-input-desc">
          <input
            type="radio"
            id="column-sort-input-desc"
            data-testid="column-sort-input-desc"
            value="DESC"
            name="sort"
            onChange={ (e) => handleSortFilterChange(e) }
          />
          DESC
        </label>
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ () => sendSortFilter() }
        >
          SORT
        </button>
      </form>
      <ul id="filter-list" />
    </div>
  );
};

export default Filter;
