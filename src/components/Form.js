import React, { useState, useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Form() {
  const { filterPlanets } = useContext(StarWarsContext);
  const [keyWord, setKeyWord] = useState('');

  const handleChange = ({ target }) => {
    const word = target.value;
    setKeyWord(word);
  };

  useEffect(() => {
    filterPlanets(keyWord);
  }, [keyWord]);

  return (
    <div>
      <form>
        <input
          data-testid="name-filter"
          type="text"
          onChange={ handleChange }
        />
      </form>
    </div>

  );
}

export default Form;
