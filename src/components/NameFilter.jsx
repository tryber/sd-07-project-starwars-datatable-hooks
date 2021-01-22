import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const NameFilter = () => {
  const { filters, setFilter } = useContext(StarWarsContext);
  const { name } = filters.filterByName;

  const handleChange = ({ target }) => {
    setFilter({ filterByName: {
      name: target.value,
    } });
  };

  return (
    <div>
      <label htmlFor="name-filter">
        Nome:
        <input
          id="name-filter"
          type="text"
          data-testid="name-filter"
          value={ name }
          onChange={ handleChange }
        />
      </label>
    </div>
  );
};

export default NameFilter;
