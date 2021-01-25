import React, { useContext } from 'react';

import StarWarsContext from '../context/StarWarsContext';

function FilterPlanets() {
  const { handleFilterName } = useContext(StarWarsContext);
  return (
    <form>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Filtrar por nome"
        onChange={ handleFilterName }
        name="name"
        // value={ value }
      />
    </form>
  );
}

export default FilterPlanets;
