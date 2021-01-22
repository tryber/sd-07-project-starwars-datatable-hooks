import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Searcher() {
  const {
    handleFilter,
    filters,
    setColumn,
    setComparison,
    setValue,
    column,
    comparison,
    value,
  } = useContext(StarWarsContext);

  const columns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];
  const comparation = ['maior que', 'menor que', 'igual a'];

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
            <select
              data-testid="column-filter"
              id="collumns"
              onChange={ (event) => setColumn(event.target.value) }
            >
              {columns.map((collum) => (
                <option key={ collum } value={ collum }>{ collum }</option>
              ))}
            </select>
          </label>
          <label htmlFor="comparation">
            Comparação
            <select
              data-testid="comparison-filter"
              id="comparation"
              onChange={ (event) => setComparison(event.target.value) }
            >
              {comparation.map((item) => (
                <option key={ item } value={ item }>{ item }</option>
              ))}
            </select>
          </label>
          <input
            placeholder="Número"
            type="number"
            data-testid="value-filter"
            onChange={ (event) => setValue(event.target.value) }
          />
          <button
            type="button"
            data-testid="button-filter"
            onClick={
              column !== ''
              && comparison !== ''
              && value !== ''
                ? () => handleFilter('filterByNumericValues') : undefined
            }
          >
            Adicionar Filtro
          </button>
        </div>
      )}
    </StarWarsContext.Consumer>
  );
}

export default Searcher;
