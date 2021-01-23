import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';
import './style.css';

function Filters() {
  const { setState } = useContext(StarWarsContext);

  function handleChange({ target: { value } }) {
    setState(value);
  }

  // function handleClick(event) {
  //   event.preventDefault();
  // }

  // function renderValueInput() {
  //   return (
  //     <label htmlFor="value">
  //       Valor:
  //       <input
  //         id="value"
  //         type="number"
  //         placeholder="Valor"
  //         name="value"
  //         onChange={ (e) => handleChange(e) }
  //         className="input"
  //       />
  //     </label>
  //   );
  // }

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

  // function renderButton() {
  //   return (
  //     <button className="button" type="button" onClick={ handleClick }>
  //       Filter
  //     </button>
  //   );
  // }

  return (
    <section className="form">
      <div>
        <h2>Planets</h2>
        <form>
          {/* {renderValueInput()} */}
          {renderTextInput()}
          {/* {renderButton()} */}
        </form>
      </div>
    </section>
  );
}

export default Filters;
