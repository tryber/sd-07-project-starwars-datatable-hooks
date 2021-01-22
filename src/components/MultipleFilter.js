import React, { useContext, useState } from 'react';
import { Context } from '../context/StarWarsContext';

function MultipleFilter() {
  const {
    availableColumn, availableComparison, handleFiltersChange } = useContext(Context);
  const columnFilter = [...availableColumn];
  const comparisonFilter = [...availableComparison];
  const minimumValue = 0;
  const [column, setColumn] = useState(columnFilter[0]);
  const [comparison, setComparison] = useState(comparisonFilter[0]);
  const [number, setNumber] = useState(minimumValue);

  // const [numberFilter, setNumberFilter] = useState(minimumValue);
  // console.log(columnFilter);
  // console.log(comparisonFilter);
  // console.log(allFilters);

  const handleColumnChange = (value) => {
    setColumn(value);
  };

  const handleComparisonChange = (value) => {
    setComparison(value);
  };

  const handleNumberChange = (value) => {
    setNumber(value);
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        value={ column }
        onChange={ (e) => handleColumnChange(e.target.value) }
      >
        {
          columnFilter.map(
            (item) => <option key={ item }>{item}</option>,
          )
        }
      </select>
      <select
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ (e) => handleComparisonChange(e.target.value) }
      >
        {
          comparisonFilter.map(
            (item) => <option key={ item }>{item}</option>,
          )
        }
      </select>
      <input
        type="number"
        data-testid="value-filter"
        value={ number }
        onChange={ (e) => handleNumberChange(e.target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleFiltersChange(column, comparison, number) }
      >
        Adicionar Filtro
      </button>
    </div>
  );
}

export default MultipleFilter;
