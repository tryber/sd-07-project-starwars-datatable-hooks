import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function PlanetsFilters() {
  const { handleFilterByName } = useContext(StarWarsContext);
  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handleFilterByName }
      />
    </div>
  );
}

export default PlanetsFilters;
