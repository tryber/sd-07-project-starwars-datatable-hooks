import React from 'react';
import MyContext from '../../context/MyContext';

function Inputs(key) {
  return (
    <MyContext.Consumer>
      {(value) => {
        const { filters: { filterByName: { name } }, handleChange } = value;
        return (
          <label htmlFor={ `input-${key}` }>
            <input
              key={ `input-${key}` }
              name={ `input-${key}` }
              id={ `input-${key}` }
              data-testid={ key }
              value={ name }
              onChange={ ({ target }) => handleChange(target.value) }
            />
          </label>
        );
      }}
    </MyContext.Consumer>
  );
}

export default Inputs;
