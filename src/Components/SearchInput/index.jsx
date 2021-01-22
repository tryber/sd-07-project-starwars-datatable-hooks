import React, { useContext } from 'react';
import StarWarsContext from '../../Context/StarWarsContext';

const SearchInput = () => {
  const { onChangeName, name } = useContext(StarWarsContext);

  return (
    <>
      <h1>Search</h1>

      <input
        type="text"
        value={ name }
        onChange={ onChangeName }
        placeholder="Digite o nome do planeta"
        data-testid="name-filter"
      />
    </>
  );
};

export default SearchInput;
