import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function Filters() {
  const { handleChangeInputName } = useContext(StarWarsContext);
  return (
    <div>
      <label htmlFor="search-name">
        Pesquise o nome de um planeta:
        <input
          data-testid="name-filter"
          onChange={ handleChangeInputName }
          type="text"
          name="search-name"
        />
      </label>
    </div>
  );
}

export default Filters;
