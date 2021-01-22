import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

const InputFilterName = () => {
  const {
    filters: {
      filterByName: {
        name,
      },
    },
    changeFilterName,
  } = useContext(StarWarsContext);
  return (
    <input
      type="text"
      value={ name }
      data-testid="name-filter"
      onChange={ (e) => changeFilterName(e.target.value) }
    />
  );
};

export default InputFilterName;
