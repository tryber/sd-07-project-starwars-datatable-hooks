import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function NumericFilter() {
  const {
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    filterByNumericValues,
    setFilterByNumericValues,
    filteredData,
    setFilteredData,
  } = useContext(StarWarsContext);

  const addFilterByNumericValue = () => {
    filterByNumericValues.forEach((filter) => {
      switch (filter.comparison) {
      case 'maior que':
        setFilteredData(filteredData
          .filter((planet) => Number(planet[filter.column]) > filter.value));
        console.log(filteredData
          .filter((planet) => Number(planet[filter.column]) > filter.value));
        break;
      case 'menor que':
        setFilteredData(filteredData
          .filter((planet) => Number(planet[filter.column]) < filter.value));
        console.log(filteredData
          .filter((planet) => Number(planet[filter.column]) < filter.value));
        break;
      case 'igual a':
        setFilteredData(filteredData
          .filter((planet) => Number(planet[filter.column]) === filter.value));
        console.log(filteredData
          .filter((planet) => Number(planet[filter.column]) === filter.value));
        break;
      default:
        return filteredData;
      }
    });
  };

  const addNewFilter = () => {
    const newFilter = [...filterByNumericValues, { column, comparison, value }];
    setFilterByNumericValues(newFilter);
  };

  const handleClick = () => {
    addNewFilter();
    addFilterByNumericValue();
  };

  return (
    <form>
      Filtrar por número:
      <label htmlFor="column-filter">
        Tag de comparação
        <select
          data-testid="column-filter"
          onChange={ ({ target }) => setColumn(target.value) }
        >
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison-filter">
        Filtro de comparação
        <select
          data-testid="comparison-filter"
          onChange={ ({ target }) => setComparison(target.value) }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        Número de comparação
        <input
          type="number"
          onChange={ ({ target }) => setValue(target.value) }
        />
      </label>
      <button
        type="button"
        onClick={ handleClick }
      >
        Adicionar filtro
      </button>
    </form>
  );
}

export default NumericFilter;
