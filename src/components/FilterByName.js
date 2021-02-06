import React, { useContext } from 'react';
import '../App.css';
import StarWarsContext from '../context/StarWarsContext';

function SearchBarName() {
  const { inputName, setInputName } = useContext(StarWarsContext);
  const handleChange = ({ target }) => {
    const { value } = target;
    setInputName(value);
  };

  return (
    <div className="input-name">
      <label htmlFor="search-name">
        <input
          placeholder="Digite o nome do Planeta"
          type="text"
          data-testid="name-filter"
          id="search-name"
          value={ inputName }
          onChange={ (event) => handleChange(event) }
        />
      </label>
    </div>

  );
}

export default SearchBarName;
