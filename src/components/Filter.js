import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Filter = () => {
  const { setFilterPlanetName } = useContext(StarWarsContext);
  return (
    <input
      type="text"
      data-testid="name-filter"
      name="name-filter"
      placeholder="Planets"
      onChange={ ({ target: { value } }) => {
        setFilterPlanetName(value);
      } }
    />
  );
};

export default Filter;
