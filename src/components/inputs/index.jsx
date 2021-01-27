import React from 'react';
import MyContext from '../../context/MyContext';

function Inputs(name) {
  return (
    <MyContext.Consumer>
      {(value) => {
        const { handleChange } = value;
        return (
          <label htmlFor={ `input-${name}` }>
            <input
              name={ `input-${name}` }
              id={ `input-${name}` }
              data-testid={ name }
              onChange={ ({ target }) => handleChange(target.value) }
            />
          </label>
        );
      }}
    </MyContext.Consumer>
  );
}

export default Inputs;
