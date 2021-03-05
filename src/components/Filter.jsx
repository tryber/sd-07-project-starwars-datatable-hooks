import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Filter = () => {
  const { filters, setFilters } = useContext(StarWarsContext);
  const [currNumFilter, setCurrNumFilter] = useState({
    column: '',
    comparison: '',
    value: '',
  });
  const { filteredByName, setFilteredByName } = useContext(StarWarsContext);
  const { filteredByNum, setFilteredByNum } = useContext(StarWarsContext);

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

  const handleNumericFilterChange = (e) => {
    const { value } = e.target;
    setCurrNumFilter({
      ...currNumFilter,
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
      <ul id="filter-list" />
    </div>
  );
};

export default Filter;
