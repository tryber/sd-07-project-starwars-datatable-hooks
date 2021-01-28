import React, { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';
import getOptions from './getOptions';

function Dropdowns(key, columns) {
  const { comparison, column, changeNumbers } = useContext(GlobalContext);
  let value;
  if (key === 'column') value = column;
  if (key === 'comparison') value = comparison;
  return (
    <select
      data-testid={ `${key}-filter` }
      onChange={
        ({ target }) => changeNumbers(target.selectedOptions[0].value, key)
      }
      value={ value }
    >
      {getOptions(columns)}
    </select>
  );
}

export default Dropdowns;
