import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function SearchBar() {
  const { filteredPlanets } = useContext(StarWarsContext);

  return (
    <div>
      <input
        type="text"
        name="search"
        placeholder="Type to search"
        data-testid="name-filter"
        onChange={
          ({ target: { value } }) => filteredPlanets(value)
        }
      />
    </div>
  );
}
