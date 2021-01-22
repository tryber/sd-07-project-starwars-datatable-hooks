import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const FilterByName = () => {
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
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <input
          type="text"
          data-testid="name-filter"
          name="name-filter"
          placeholder="Search a planet by name"
          onChange={ handleChange }
        />
      </div>
    </div>
  );
};

export default FilterByName;
