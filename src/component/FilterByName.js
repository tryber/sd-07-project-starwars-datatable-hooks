import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterByName() {
  const { filterName, setFilterName } = useContext(StarWarsContext);
  // codigo Eric vini
  const handleChange = ({ target }) => {
    const { value } = target;
    setFilterName(value);
  };

  return (
    <div>
      <label htmlFor="input">
        Buscar:
        <input
          name="input"
          type="text"
          id="name"
          data-testid="name-filter"
          value={ filterName }
          onChange={ (event) => handleChange(event) }
        />
      </label>
    </div>
  );
}

export default FilterByName;
