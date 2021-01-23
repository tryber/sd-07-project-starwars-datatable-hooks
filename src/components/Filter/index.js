import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function Filter() {
  const { filters, setFilters } = useContext(StarWarsContext);

  function handleChange({ target }) {
    const { value } = target;
    setFilters(value);
  }

  return (
    <div>
      <input
        type="text"
        value={ filters }
        onChange={ (e) => handleChange(e) }
        data-testid="name-filter"
      />
    </div>
  );
}

export default Filter;
