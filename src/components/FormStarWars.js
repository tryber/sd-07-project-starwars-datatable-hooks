import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const FormStarWars = () => {
  const { searchPlanets } = useContext(StarWarsContext);

  const inputHandler = ({ target }) => {
    searchPlanets(target.value);
  };

  return (
    <div>
      <label htmlFor="home">
        Nome Planeta
        <input id="nome" type="text" onChange={ inputHandler } />
      </label>
    </div>
  );
};

export default FormStarWars;
