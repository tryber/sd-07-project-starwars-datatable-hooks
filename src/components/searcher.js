import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Searcher() {
  const { handleFilter, filters } = useContext(StarWarsContext)

  return (
    <StarWarsContext.Consumer>
    {value => (
      <div>
        <h1>Searcher</h1>
        <input
          type='text'
          placeholder='Busca por nome'
          data-testid='name-filter'
          onChange={ (event) => handleFilter('filterByName', event.target.value ) }
          value={filters.filterByName.name}
        />
      </div>
    )}
    </StarWarsContext.Consumer>
  )
}

export default Searcher
