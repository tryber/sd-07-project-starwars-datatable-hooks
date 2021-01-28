import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function NumericFilter() {
  const {
    data,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    filterByNumericValues,
    setFilterByNumericValues,
    columnOptions,
    setColumnOptions,
    filteredData,
    setFilteredData,
  } = useContext(StarWarsContext);

  const addNewFilter = () => {
    const newFilter = [...filterByNumericValues, { column, comparison, value }];
    setFilterByNumericValues(newFilter);
  };

  const handleClick = () => {
    addNewFilter();
  };

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
    const toRemoveArray = filterByNumericValues.map((filter) => filter.column);
    setColumnOptions(columnOptions
      .filter((columnOption) => !toRemoveArray.includes(columnOption)));
  };

  useEffect(() => {
    addFilterByNumericValue();
  }, [filterByNumericValues]);

  const removeAllFilters = () => {
    setFilteredData(data);
    setColumnOptions([
      'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
    setFilterByNumericValues([]);
  };

  return (
    <div>
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
      <div data-testid="filter">
        Remover todos os filtros
        <button type="button" onClick={ () => removeAllFilters() }>X</button>
      </div>
      { filterByNumericValues
        .map((filter, index) => (
          <div
            key={ index }
            data-testid="filter"
          >
            { `${filter.column} ${filter.comparison} ${filter.value}`}
            <button
              type="button"
              onClick={ () => removeAllFilters() }
            >
              X
            </button>
          </div>
        )) }
    </div>
  );
}

export default NumericFilter;
