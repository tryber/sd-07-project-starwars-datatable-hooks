import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';
import './style.css';

function Filters() {
  const { filters, setFilters, state, setState } = useContext(StarWarsContext);

  function handleChange({ target: { name, value } }) {
    setFilters({ ...filters, filterByName: { [name]: value } });
  }

  function handleStateChange({ target: { name, value } }) {
    setState({ ...state, [name]: value });

  }

  function handleClick(event) {
    const { filterByNumericValues } = filters;
    event.preventDefault();
    setFilters({
      ...filters,
      ...filters.filterByNumericValues,
      filterByNumericValues: [...filterByNumericValues, state],
    });
  }

  function renderValueInput() {
    return (
      <label htmlFor="value">
        Valor:
        <input
          autoComplete="off"
          id="value"
          data-testid="value-filter"
          type="text"
          placeholder="Valor"
          name="value"
          onChange={ (e) => handleStateChange(e) }
          className="input"
        />
      </label>
    );
  }

  function renderColumnSelector() {
    const columnFilter = [
      'rotation_period',
      'orbital_period',
      'diameter',
      'surface_water',
      'population',
    ];
    const usedColumns = filters.filterByNumericValues.map(({column}) => column);
    const removedComlumn = columnFilter.filter((column) => !usedColumns.includes(column))
    return (
      <label htmlFor="column-filter">
        Coluna:
        <select
          data-testid="column-filter"
          className="input"
          name="column"
          onChange={ (e) => (handleStateChange(e)) }
        >
          {removedComlumn.map((filter, index) => (
            <option key={ index }>{filter}</option>
          ))}
        </select>
      </label>
    );
  }

  function renderComparisonSelector() {
    const comparisonFilter = ['maior que', 'igual a', 'menor que'];
    return (
      <label htmlFor="comparison-filter">
        Comparação:
        <select
          data-testid="comparison-filter"
          className="input"
          name="comparison"
          onChange={ (e) => handleStateChange(e) }
        >
          {comparisonFilter.map((comparison, index) => (
            <option key={ index }>{comparison}</option>
          ))}
        </select>
      </label>
    );
  }

  function renderTextInput() {
    return (
      <label htmlFor="text">
        Name:
        <input
          autoComplete="off"
          id="text"
          data-testid="name-filter"
          type="text"
          name="name"
          onChange={ (e) => handleChange(e) }
          placeholder="Text to Filter"
          className="input"
        />
      </label>
    );
  }

  function renderButton() {
    return (
      <button
        className="button"
        data-testid="button-filter"
        type="button"
        onClick={ (e) => handleClick(e) }
      >
        Add Filter
      </button>
    );
  }

  return (
    <section className="form">
      <div>
        <h2>Planets</h2>
        <form>
          {renderTextInput()}
          {renderColumnSelector()}
          {renderComparisonSelector()}
          {renderValueInput()}
          {renderButton()}
        </form>
      </div>
    </section>
  );
}

export default Filters;
