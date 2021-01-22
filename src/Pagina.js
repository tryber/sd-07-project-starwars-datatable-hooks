import React, { useContext } from 'react';
import { StarWarsContext } from './context/StarWarsContext';
import Tabela from './components/Tabela';

function Pagina() {
  const { filters, setFilter } = useContext(StarWarsContext);
  const { filterByName } = filters;
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
    </div>
  );
}

export default Pagina;
