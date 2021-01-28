import React, { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';

function Buttons(key, name) {
  const { filterBtn } = useContext(GlobalContext);
  return (
    <button
      data-testid={ key }
      type="button"
      onClick={ () => {
        if (key === 'button-filter') {
          filterBtn();
        }
      } }
    >
      { name }
    </button>
  );
}

export default Buttons;
