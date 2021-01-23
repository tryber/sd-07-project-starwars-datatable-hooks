import React, { useContext } from 'react';
import StarWarsContext from '../context/StartWarsContext';

function NameFilter() {
  const { setFilters, filters } = useContext(StarWarsContext);

  const handleChange = ({ target }) => {
    const nameInput = {
      name: target.value,
    };
    setFilters({ ...filters, filterByName: nameInput });
  };

  return (
    <label htmlFor="name-input">
      Pesquisar por nome:
      <input
        data-testid="name-filter"
        id="name-input"
        type="text"
        onChange={ (event) => handleChange(event) }
      />
    </label>
  );
}

export default NameFilter;
