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
  // const filtersValues = filters.filterByNumericValues;
  // const filtersValues = Object.create(filters.filterByNumericValues[0]);
  // let filtersValues = {};

  function handleChange({ target: { id, value } }) {
    setCustomFilter(false);
    setSelectValues({
      ...selectValues,
      [id]: value,
    });
    // setCustomFilter(false);
    // console.log('context:', filters.filterByNumericValues)
    // console.log('filtersValue:', filtersValues)

    // filtersValues = { ...filtersValues, [id]: value };
    // const newFilter = filters.filterByNumericValues.concat(filtersValues);
    // console.log('newFilter: ', newFilter)

    // // console.log(filtersValues)
    // // dispatch({ type: 'FILTER_BY_COLUMN', payload: filtersValues });
    // dispatch({ type: 'FILTER_BY_COLUMN', payload: newFilter });
  }

  function addFilter() {
    setCustomFilter(true);
    // console.log('Filtro Numerico: ', filters.filterByNumericValues);
    const newFilter = filters.filterByNumericValues.concat(selectValues);
    // console.log('newFilter');
    // console.log(newFilter);
    dispatch({ type: 'FILTER_BY_COLUMN', payload: newFilter });
  }

  useEffect(() => {
    function filterColumnOptions() {
      let filteredColumns = columnOptions;
      const activeFilters = filters.filterByNumericValues.map((filter) => filter.column);
      if (activeFilters.length > 1) {
        activeFilters.forEach((option) => {
          filteredColumns = filteredColumns.filter((e) => option !== e);
        });
      }
      // console.log('Colunas ativas: ', activeFilters);
      // console.log('filteredColumns: ', filteredColumns);
      setFilteredColumnOptions(filteredColumns);
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
        // onClick={ () => setCustomFilter(true) }
        onClick={ () => addFilter() }
      >
        Filtrar
      </button>
    </div>
  );
};

export default NumericFilter;
