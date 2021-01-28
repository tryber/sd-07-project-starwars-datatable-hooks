import React, { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';

function Inputs(key, func) {
  const { name, value, changeName, changeNumbers } = useContext(GlobalContext);
  let setType = 'text';
  let setValue;
  let setChange;
  if (func === 'name') {
    setValue = name;
    setChange = changeName;
  }
  if (func === 'numbers') {
    setType = 'number';
    setValue = value;
    setChange = changeNumbers;
  }

  return (
    <label htmlFor={ key }>
      <input
        type={ setType }
        key={ key }
        name={ key }
        id={ key }
        data-testid={ key }
        value={ setValue }
        onChange={ ({ target }) => {
          setChange(target.value, 'value');
        } }
      />
    </label>
  );
}

export default Inputs;
