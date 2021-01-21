import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const FilterSearch = () => {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState();

  const { changeFilterByName, changeFilterByNumber } = useContext(StarWarsContext);
  return (
    <div>
      <label htmlFor="filterByName">
        Pesquisa por nome:
        { ' ' }
        <input
          data-testid="name-filter"
          type="text"
          id="filterByName"
          onChange={ ({ target }) => changeFilterByName(target.value) }
        />
      </label>
      <span>Pesquisa por números: </span>
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => setColumn(target.value) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => setComparison(target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        onChange={ ({ target }) => setValue(target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => changeFilterByNumber(column, comparison, value) }
      >
        Filtrar
      </button>
    </div>
  );
};

export default FilterSearch;
