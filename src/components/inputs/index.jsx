import React, { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';

function Inputs(key) {
  const { name, changeName } = useContext(GlobalContext);
  return (
    <label htmlFor={ `input-${key}` }>
      <input
        key={ `input-${key}` }
        name={ `input-${key}` }
        id={ `input-${key}` }
        data-testid={ key }
        value={ name }
        onChange={ ({ target }) => changeName(target.value) }
      />
    </label>
  );
}

export default Inputs;
