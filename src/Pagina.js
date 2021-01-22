import React, { useState, useContext } from 'react';
import { StarWarsContext } from './context/StarWarsContext';
import Tabela from './components/Tabela';

function Pagina() {
  const { filters, setFilter } = useContext(StarWarsContext);
  const [column, setcolumn] = useState('');
  const [comparison, setcomparison] = useState('');
  const [value, setvalue] = useState((1 - 1));
  const { filterByName, filterByNumericValues } = filters;

  function click() {
    const obj = {
      column,
      comparison,
      value,
    };
    setFilter({
      ...filters,
      filterByNumericValues: [...filterByNumericValues, obj],
    });
  }

  return (
    <div className="App">
      <Tabela />
      <label htmlFor="fn">
        filter name
        <input
          id="fn"
          value={ filterByName }
          onChange={ ({ target }) => setFilter({
            ...filters,
            filterByName: target.value,
          }) }
          data-testid="name-filter"
          type="text"
        />
      </label>
      <div>
        <select
          value={ column }
          data-testid="column-filter"
          onChange={ (event) => setcolumn(event.target.value) }
        >
          <option value="">escolha</option>
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select
          value={ comparison }
          data-testid="comparison-filter"
          onChange={ (event) => setcomparison(event.target.value) }
        >
          <option value="">escolha</option>
          <option value="igual a">igual a</option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
        </select>
        <input
          value={ value }
          onChange={ (event) => setvalue(event.target.value) }
          data-testid="value-filter"
          type="number"
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => click() }
        >
          começar invasão
        </button>
      </div>
    </div>
  );
}

export default Pagina;
