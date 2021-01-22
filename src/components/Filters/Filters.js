import React, { useState } from 'react';
import './style.css';

function Filters() {
  const [state, setState] = useState();

  function handleChange({ target: { name, value } }) {
    setState({ [name]: value });
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
          value={ state }
          onChange={ handleChange }
          className="input"
        />
      </label>
    );
  }

  function renderTextInput() {
    return (
      <label htmlFor="text">
        Name:
        <input
          id="text"
          type="text"
          name="text"
          value={ state }
          onChange={ handleChange }
          placeholder="Text to Filter"
          className="input"
        />
      </label>
    );
  }

  function renderButton() {
    return (
      <button className="button" type="button" onClick={ handleClick }>
        Filter
      </button>
    );
  }

  return (
    <section className="form">
      <div>
        <h2>
          Planets
        </h2>
        <form>
          { renderValueInput() }
          { renderTextInput() }
          { renderButton() }
        </form>
      </div>
    </section>
  );
}

export default Filters;
