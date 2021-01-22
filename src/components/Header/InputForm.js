import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function InputForm() {
  const { handleFilterName } = useContext(StarWarsContext);
  return (
    <div>
      <label htmlFor="filtername">
        Filter by Name
        <input
          data-testid="name-filter"
          name="filtername"
          type="text"
          placeholder="tatoo"
          onChange={ handleFilterName }
        />
      </label>
    </div>
  );
}

export default InputForm;
