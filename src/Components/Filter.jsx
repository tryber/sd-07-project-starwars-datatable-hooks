import React, { useContext } from 'react';
import StarWarsContext from '../Provider/StarWarsContext';

function Filter() {
  const { filter, filterPlanet } = useContext(StarWarsContext);
  return (
    <div className="filter">
      <input
        type="text"
        name="serch"
        data-testid="name-filter"
        placeholder="Select your planet from confederation"
        className="input"
        onChange={ (event) => filterPlanet(event.target.value) }
        value={ filter.value }
      />
    </div>
  );
}

export default Filter;
