import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const FilterByNumber = () => {
  const {
    setFilterColumn,
    setFilterComparison,
    setFilterValue,
    // setFilteredPlanets,
    filters,
    filteredPlanets,
    setFilteredPlanetNumber,
  } = useContext(StarWarsContext);

  // Lógica do aluno Carlos Souza
  // Fonte: https://github.com/tryber/sd-07-project-starwars-datatable-hooks/blob/121ebd0b46568de1adf8921899e95a07e12e2985/src/components/Table/index.js
  const filterNumber = () => {
    const { filterByNumericValues } = filters;
    let results = filteredPlanets;
    filterByNumericValues.forEach((_, index) => {
      results = results.filter((planet) => {
        const { column, comparison, value } = filterByNumericValues[index];
        switch (comparison) {
        case 'maior que':
          return parseFloat(planet[column]) > parseFloat(value);
        case 'igual a':
          return parseFloat(planet[column]) === parseFloat(value);
        case 'menor que':
          return parseFloat(planet[column]) < parseFloat(value);
        default:
          return planet;
        }
      });
    });
    setFilteredPlanetNumber(results);
    // return results;
  };

  const handleChangeColumn = ({ target: { value } }) => {
    setFilterColumn(value);
  };

  const handleChangeComparison = ({ target: { value } }) => {
    setFilterComparison(value);
  };

  const handleChangeValue = ({ target: { value } }) => {
    const emptyValue = 0;
    if (value === '') value = emptyValue;
    setFilterValue(value);
  };

  return (
    <div className="input-group mb-3">
      <select
        data-testid="column-filter"
        onChange={ handleChangeColumn }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ handleChangeComparison }
      >
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>
      <input
        data-testid="value-filter"
        placeholder="Type a number"
        onChange={ handleChangeValue }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ filterNumber }
      >
        Filtrar
      </button>
    </div>
  );
};

export default FilterByNumber;
