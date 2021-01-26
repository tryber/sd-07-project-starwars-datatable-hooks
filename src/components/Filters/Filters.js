import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';
import './style.css';

function Filters() {
  const { setFilter } = useContext(StarWarsContext);

  function handleChange({ target: { value } }) {
    const nameFilter = {
      filters: {
        filterByName: {
          name: value,
        },
      },
    };
    setFilter(nameFilter);
  }

  function handleClick(event) {
    event.preventDefault();
  }

  function renderValueInput() {
    return (
      <label htmlFor="value">
        Valor:
        <input
          id="value"
          type="number"
          placeholder="Valor"
          name="value"
          onChange={ (e) => handleChange(e) }
          className="input"
        />
      </label>
    );
  }

  function renderColumnSelector() {
    const columnFilter = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    return (
      <label htmlFor="column-filter">
        Coluna:
        <select data-testid="column-filter" className="input">
          {columnFilter.map((filter, index) => (
            <option key={ index }>{filter}</option>
          ))}
        </select>
      </label>
    );
  }

  function renderComparisonSelector() {
    const comparisonFilter = ['maior que', 'menor que', 'igual'];
    return (
      <label htmlFor="comparison-filter">
        Comparação:
        <select data-testid="comparison-filter" className="input">
          {comparisonFilter.map((filter, index) => (
            <option key={ index }>{filter}</option>
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
          id="text"
          data-testid="name-filter"
          type="text"
          onChange={ (e) => handleChange(e) }
          placeholder="Text to Filter"
          className="input"
        />
      </label>
    );
  }

  function renderButton() {
    return (
      <button className="button" type="button" onClick={ (e) => handleClick(e) }>
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
