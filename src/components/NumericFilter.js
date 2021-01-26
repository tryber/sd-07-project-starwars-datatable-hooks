import React, { useContext, useEffect } from 'react';
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

  const columnOptions = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  const addFilterByNumericValue = () => {
    filterByNumericValues.forEach((filter) => {
      switch (filter.comparison) {
      case 'maior que':
        setFilteredData(filteredData
          .filter((planet) => Number(planet[filter.column]) > filter.value));
        break;
      case 'menor que':
        setFilteredData(filteredData
          .filter((planet) => Number(planet[filter.column]) < filter.value));
        break;
      case 'igual a':
        setFilteredData(filteredData
          .filter((planet) => Number(planet[filter.column]) === Number(filter.value)));
        break;
      default:
        return filteredData;
      }
    });
  };

  useEffect(() => {
    addFilterByNumericValue();
  }, [filterByNumericValues]);

  const addNewFilter = () => {
    const newFilter = [...filterByNumericValues, { column, comparison, value }];
    setFilterByNumericValues(newFilter);
  };

  const handleClick = () => {
    addNewFilter();
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
          { columnOptions.map((element) => (
            <option key={ element }>{ element }</option>
          )) }
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
          data-testid="value-filter"
          onChange={ ({ target }) => setValue(target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Adicionar filtro
      </button>
    </form>
  );
}

export default NumericFilter;
