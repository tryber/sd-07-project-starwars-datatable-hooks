import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filter() {
  const { handleFilterChange, filters } = useContext(StarWarsContext);
  const { name } = filters.filterByName;
  return (
    <div>
      <input
        data-testid="name-filter"
        placeholder="escreva o nome do planeta"
        onChange={ handleFilterChange }
        value={ name }
      />
    </div>
  );
}
export default Filter;
