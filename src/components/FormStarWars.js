import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const FormStarWars = () => {
  const { searchPlanets } = useContext(StarWarsContext);

  const inputHandler = async ({ target }) => {
    await searchPlanets(target.value);
  };

  return (
    <div>
      <label htmlFor="home">
        Nome Planeta
        <input
          id="nome"
          data-testid="name-filter"
          type="text"
          onChange={ inputHandler }
        />
      </label>
      <select>
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
    </div>
  );
};

export default FormStarWars;
