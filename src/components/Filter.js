import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Filter = () => {
  const {
    handleInput,
    handleInputNumbers,
    tags,
    addFilter,
    tempFilter } = useContext(StarWarsContext);

  const { column, comparison, value } = tempFilter;

  const [availableOptions, setAvailableOptions] = useState([...tags]);

  const addFilterAndSetList = () => {
    addFilter();
    setAvailableOptions(tags.filter((item) => item !== column));
  };

  return (
    <header>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ (event) => handleInput(event) }
      />
      <select
        data-testid="column-filter"
        value={ column }
        onChange={ (event) => handleInputNumbers('column', event) }
      >
        { availableOptions.map((tag) => (
          <option
            key={ tag }
            value={ tag }
          >
            {tag}
          </option>))}
      </select>
      <select
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ (event) => handleInputNumbers('comparison', event) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        value={ value }
        data-testid="value-filter"
        onChange={ (event) => handleInputNumbers('value', event) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ addFilterAndSetList }
      >
        Acionar o filtro
      </button>
    </header>
  );
};

export default Filter;
