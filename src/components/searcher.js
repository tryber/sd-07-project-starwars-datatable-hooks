import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Searcher() {
  const { handleFilter, filters } = useContext(StarWarsContext);
  const columns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];

  return (
    <StarWarsContext.Consumer>
      {() => (
        <div>
          <h1>Searcher</h1>
          <input
            type="text"
            placeholder="Busca por nome"
            data-testid="name-filter"
            onChange={ (event) => handleFilter('filterByName', event.target.value) }
            value={ filters.filterByName.name }
          />
          <label htmlFor="collumns">
            Selecione uma coluna
            <select data-testid="column-filter" id="collumns">
              {columns.map((collum) => (
                <option key={ collum } value={ collum }>{ collum }</option>
              ))}
            </select>
          </label>
        </div>
      )}
    </StarWarsContext.Consumer>
  );
}

export default Searcher;
