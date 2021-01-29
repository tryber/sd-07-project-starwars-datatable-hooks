import React, { useState, useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterByName() {
  const { setArrayPlanets, data } = useContext(StarWarsContext);
  const { filter, setFilter } = useContext(StarWarsContext);

  const filterPlanets = () => {
    const { name } = filter.filterByName;
    const searchPlanets = data.filter((item) => item.name.includes(name));
    setArrayPlanets(searchPlanets);
  };

  useEffect(() => {
    filterPlanets();
  }, [filter]);

  const handleChange = (value) => {
    setFilter({
      ...filter,
      filterByName: { ...filter.FilterByName, name: value },    
    });
  };

  return (
    <div>
      <label htmlFor="filter">
        Filtro:
        <input
          id="filter"
          type="text"
          data-testid="name-filter"
          placeholder="Nome do planeta"
          onChange={ (event) => handleChange(event.target.value) }
        />
      </label>
    </div>
  );
}

export default FilterByName;
