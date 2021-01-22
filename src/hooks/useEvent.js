import { useState } from 'react';

function useEvent() {
  const [values, setValues] = useState({ });
  const [valueName, setValueName] = useState('');

  const handlerNameChange = ({ target }) => {
    const { value } = target;
    setValueName(value);
  };

  const handlerNumberChange = ({ target }) => {
    const { name, value } = target;
    const objValues = { ...values };
    objValues[name] = value;
    setValues(objValues);
  };

  return [{ values }, valueName, handlerNameChange, handlerNumberChange];
}

export default useEvent;
