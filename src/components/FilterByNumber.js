import React, { useContext, useState } from 'react';
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
    // filterByNumericValues,
  } = useContext(StarWarsContext);

  const [columns, setColumns] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const handleClick = () => {
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
    setColumns(columns.filter((element) => element !== filterColumn));
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
        {columns.map((element) => (
          <option key={ element }>{element}</option>
        ))}
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
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </div>
  );
};

export default FilterByNumber;
