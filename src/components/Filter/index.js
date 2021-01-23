import React, { useContext, useState } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function Filter() {
  const { globalState, setGlobalState } = useContext(StarWarsContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('greater');
  const initialValueFilter = 0;
  const [valueFilter, setValueFilter] = useState(initialValueFilter);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });

  function handleChange({ target }) {
    const { value } = target;
    setFilterByName({ name: value });
    setGlobalState({
      filters: {
        filterByName: {
          name: value,
        },
        filterByNumericValues,
      },
    });
  }

  function sendFilters() {
    setFilterByNumericValues({
      column,
      comparison,
      value: valueFilter,
    });
    setGlobalState({
      filters: {
        filterByName,
        filterByNumericValues: {
          column,
          comparison,
          value: valueFilter,
        },
      },
    });
  }

  return (
    <div>
      <input
        type="text"
        value={ globalState.filters.filterByName.name }
        onChange={ (e) => handleChange(e) }
        data-testid="name-filter"
      />
      <select
        name="column"
        data-testid="column-filter"
        value={ column }
        onChange={ (e) => setColumn(e.target.value) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        name="comparison"
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ (e) => setComparison(e.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        value={ valueFilter }
        onChange={ (e) => setValueFilter(e.target.value) }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => sendFilters() }
      >
        Setar Filtro
      </button>
    </div>
  );
}

export default Filter;
