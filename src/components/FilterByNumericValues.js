import React, { useContext, useState } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

function FilterByNumericValues() {
  const {
    filterByNumericValues,
    filters: { filterByNumericValues: filterNumerics },
  } = useContext(StarWarsContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('');

  const handleClickFilter = () => {
    filterByNumericValues({ column, comparison, value });
  };

  const columns = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];
  const comparisons = ['maior que', 'menor que', 'igual a'];

  return (
    <div className="filter-numeric">

      <select
        onChange={ ({ target }) => setColumn(target.value) }
        data-testid="column-filter"
      >
        {columns.map((item) => {
          let columnExist = false;
          filterNumerics.forEach((filter) => {
            if (columnExist) return null;
            columnExist = filter.column === item;
          });
          if (columnExist) return null;

          return (<option value={ item } key={ item }>{ item }</option>);
        })}
      </select>

      <select
        onChange={ ({ target }) => setComparison(target.value) }
        data-testid="comparison-filter"
      >
        {comparisons.map((operand) => {
          let operandExist = false;
          filterNumerics.forEach((filter) => {
            if (operandExist) return null;
            operandExist = filter.comparison === operand;
          });
          if (operandExist) return null;

          return (<option value={ operand } key={ operand }>{ operand }</option>);
        })}
      </select>

      <input
        type="number"
        onChange={ ({ target }) => setValue(target.value) }
        data-testid="value-filter"
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClickFilter }
      >
        Adicionar Filtro
      </button>
    </div>
  );
}

export default FilterByNumericValues;
