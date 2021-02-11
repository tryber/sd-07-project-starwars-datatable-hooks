import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const FormStarWars = () => {
  const { searchPlanets, filters, setFilters } = useContext(StarWarsContext);
  const [filterValues, setFilterValues] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

  const inputHandler = async ({ target }) => {
    await searchPlanets(target.value);
  };

  const getInputName = () => (
    <label htmlFor="home">
      Nome Planeta
      <input
        id="nome"
        data-testid="name-filter"
        type="text"
        onChange={ inputHandler }
      />
    </label>
  );

  const deleteFilter = (index) => {
    const newFilter = filters.slice();
    newFilter.splice(index, 1);
    setFilters(newFilter);
  };

  const getFilterValues = ({ target: { value, name } }) => {
    setFilterValues({ ...filterValues, [name]: value });
  };

  const getNumbersFilter = () => (
    <div>
      <select
        data-testid="column-filter"
        name="column"
        onChange={ getFilterValues }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ getFilterValues }
      >
        <option value="maior que">
          maior que
        </option>
        <option value="menor que">
          menor que
        </option>
        <option value="igual a">
          igual a
        </option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        name="value"
        onChange={ getFilterValues }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => setFilters([...filters, filterValues]) }
      >
        Filtro
      </button>
      {filters.map((filter, index) => (
        <div data-testid="filter" key={ index }>
          <p>{filter.column}</p>
          <p>{filter.comparison}</p>
          <p>{filter.value}</p>
          <button
            type="button"
            onClick={ () => deleteFilter(index) }
          >
            x
          </button>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      {getInputName()}
      {getNumbersFilter()}
    </div>
  );
};

export default FormStarWars;
