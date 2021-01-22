import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Filter = () => {
  const {
    planets,
    setFilterPlanetName,
    setFilteredPlanets,
  } = useContext(StarWarsContext);

  const handleChange = ({ target: { value } }) => {
    setFilterPlanetName(value);
    setFilteredPlanets(
      planets.filter(({ name }) => name.toLowerCase().includes(value.toLowerCase())),
    );
  };

  return (
    <input
      type="text"
      data-testid="name-filter"
      name="name-filter"
      placeholder="Search a planet by name"
      onChange={ handleChange }
    />
  );
};

export default Filter;
