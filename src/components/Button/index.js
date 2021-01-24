import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function Button() {
  const {
    initialData,
    initialColumnArray,
    setData,
    setColumnArray,
  } = useContext(StarWarsContext);

  const handleClick = () => {
    setData(initialData);
    setColumnArray(initialColumnArray);
  };

  return (
    <button
      type="button"
      onClick={ handleClick }
    >
      X
    </button>
  );
}

export default Button;
