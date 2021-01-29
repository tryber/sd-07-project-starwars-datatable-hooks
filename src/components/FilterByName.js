import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterByName() {
  const { filters, setFilters } = useContext(StarWarsContext);
  const { filterByName } = filters;

  const HandleChange = ({ target }) => {
    setFilters({
      ...filters,
      filterByName: { name: target.value },
    });
  };

  return (
    <section>
      <label htmlFor="input">
        Search planet by name:
        <input
          data-testid="name-filter"
          type="text"
          id="input"
          value={ filterByName.name }
          onChange={ HandleChange }
        />
      </label>
    </section>
  );
}

export default FilterByName;
