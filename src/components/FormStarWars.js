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
    </div>
  );
};

export default FormStarWars;
