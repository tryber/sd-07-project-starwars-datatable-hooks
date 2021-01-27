import React, { useState, useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import DropDown from './DropDown';

const columnOptions = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const comparisonOptions = [
  'maior que',
  'menor que',
  'igual a',
];

const NumericFilter = () => {
  const selectInitial = {
    column: 'population',
    comparison: 'maior que',
    value: '10000',
  };

  const [selectValues, setSelectValues] = useState(selectInitial);
  const [filteredColumnOptions, setFilteredColumnOptions] = useState(columnOptions);
  const { filters, dispatch, setCustomFilter } = useContext(StarWarsContext);

  function handleChange({ target: { id, value } }) {
    setCustomFilter(false);
    setSelectValues({
      ...selectValues,
      [id]: value,
    });
  }

  function addFilter() {
    setCustomFilter(true);
    const newFilter = filters.filterByNumericValues.concat(selectValues);
    dispatch({ type: 'FILTER_BY_COLUMN', payload: newFilter });
  }

  useEffect(() => {
    function filterColumnOptions() {
      const minOption = 1;
      let filteredColumns = columnOptions;
      const activeFilters = filters.filterByNumericValues.map((filter) => filter.column);
      if (activeFilters.length >= minOption) {
        activeFilters.forEach((option) => {
          filteredColumns = filteredColumns.filter((e) => option !== e);
        });
      }
      setFilteredColumnOptions(filteredColumns);
      setSelectValues((sV) => ({
        ...sV,
        column: filteredColumns[0],
      }));
    }
    filterColumnOptions();
  }, [filters.filterByNumericValues]);

  return (
    <div>
      <span>Filtrar por coluna:</span>
      <DropDown
        id="column"
        dataTest="column-filter"
        options={ filteredColumnOptions }
        selectValue={ selectValues.column }
        handleChange={ handleChange }
      />
      <DropDown
        id="comparison"
        dataTest="comparison-filter"
        options={ comparisonOptions }
        selectValue={ selectValues.comparison }
        handleChange={ handleChange }
      />
      <label htmlFor="value">
        Valor:
        <input
          id="value"
          type="number"
          data-testid="value-filter"
          value={ selectValues.value }
          onChange={ handleChange }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => addFilter() }
      >
        Filtrar
      </button>
    </div>
  );
};

export default NumericFilter;
