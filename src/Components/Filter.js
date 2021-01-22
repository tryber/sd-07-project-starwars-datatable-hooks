import React, { useContext, useState } from 'react';
import ApiContext from '../Context/ApiContext';

const Filter = () => {
  const { filter, setFilter, options, setOptions } = useContext(ApiContext);
  const [column, setColumn] = useState(options[0]);
  const [comparison, setComparison] = useState('maior que');
  const zero = 0;
  const [value, setValue] = useState(zero);
  const [columnOrder, setColumnOrder] = useState('name');
  const [sortOrder, setSortOrder] = useState('ASC');

  const clickFilter = () => {
    setFilter({ filters: { ...filter.filters,
      filterByNumericValues: [
        ...filter.filters.filterByNumericValues, { column, comparison, value },
      ] } });
    const newOptions = options.filter((e) => e !== column);
    setOptions(newOptions);
    setColumn(newOptions[0]);
  };
  return (
    <>
      <input
        type="text"
        value={ filter.filters.filterByName.name }
        data-testid="name-filter"
        onChange={ ({ target }) => {
          setFilter({ filters: {
            ...filter.filters, filterByName: { name: target.value } } });
        } }
      />
      <select
        name="select"
        onChange={ ({ target }) => setColumn(target.value) }
        data-testid="column-filter"
      >
        {options.map((e) => <option key={ e } value={ e }>{e}</option>)}
      </select>
      <select
        name="select"
        onChange={ ({ target }) => setComparison(target.value) }
        data-testid="comparison-filter"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="text"
        value={ value }
        data-testid="value-filter"
        onChange={ ({ target }) => setValue(target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ clickFilter }
      >
        Filtrar
      </button>
      <h1>Ordernar</h1>
      <select
        name="select"
        onChange={ ({ target }) => setColumnOrder(target.value) }
        data-testid="column-sort"
      >
        <option value="name">name</option>
        <option value="rotation_period">rotation_period</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="climate">climate</option>
        <option value="gravity">gravity</option>
        <option value="terrain">terrain</option>
        <option value="surface_water">surface_water</option>
        <option value="population">population</option>
        <option value="films">films</option>
        <option value="created">created</option>
        <option value="edited">edited</option>
        <option value="url">url</option>
      </select>
      <input
        type="radio"
        name="order"
        value="ASC"
        testid="column-sort-input-asc"
        onClick={ ({ target }) => setSortOrder(target.value) }
      />
      <input
        type="radio"
        name="order"
        value="DESC"
        data-testid="column-sort-input-desc"
        onClick={ ({ target }) => setSortOrder(target.value) }
      />
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => {
          setFilter({ filters: {
            ...filter.filters, order: { column: columnOrder, sort: sortOrder },
          } });
        } }
      >
        Filtrar
      </button>
    </>

  );
};

export default Filter;
