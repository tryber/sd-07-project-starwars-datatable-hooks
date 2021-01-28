import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const FilterByNumber = () => {
  const {
    filterColumn,
    setFilterColumn,
    filterComparison,
    setFilterComparison,
    filterValue,
    setFilterValue,
    // setFilteredPlanets,
    filters,
    // filteredPlanets,
    setFilteredPlanetNumber,
    filteredPlanetNumber,
    // filtersArray,
    setFiltersArray,
  } = useContext(StarWarsContext);

  const filterNumber = () => {
    const data = filteredPlanetNumber;
    if (
      filterColumn !== undefined
      && filterComparison !== undefined
      && filterValue !== undefined) {
      setFiltersArray([...filters.filterByNumericValues, {
        column: filterColumn,
        comparison: filterComparison,
        value: filterValue,
      }]);

      // Lógica da estudante Emanuelle
      // Fonte: https://github.com/tryber/sd-07-project-starwars-datatable-hooks/pull/48/files

      switch (filterComparison) {
      case 'maior que':
        setFilteredPlanetNumber(data
          .filter((planet) => (
            parseFloat(planet[filterColumn]) > parseFloat(filterValue))));
        break;
      case 'menor que':
        setFilteredPlanetNumber(data
          .filter((planet) => (
            parseFloat(planet[filterColumn]) < parseFloat(filterValue))));
        break;
      case 'igual a':
        setFilteredPlanetNumber(data
          .filter((planet) => (
            parseFloat(planet[filterColumn]) === parseFloat(filterValue))));
        break;
      default:
        setFilteredPlanetNumber(data);
      }
    } else setFilteredPlanetNumber(data);
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
