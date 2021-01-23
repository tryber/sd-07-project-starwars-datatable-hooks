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

  const handleClick = () => {
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
        <option hidden>Selecione</option>
        {columns.map((item) => {
          let isExistColumn = false;
          filterNumerics.forEach((filter) => {
            if (isExistColumn) return null;
            isExistColumn = filter.column === item;
          });
          if (isExistColumn) return null;

          return (<option value={ item } key={ item }>{ item }</option>);
        })}
      </select>

      <select
        onChange={ ({ target }) => setComparison(target.value) }
        data-testid="comparison-filter"
      >
        <option hidden>Selecione</option>
        {comparisons.map((operand) => {
          let isExistOperand = false;
          filterNumerics.forEach((filter) => {
            if (isExistOperand) return null;
            isExistOperand = filter.comparison === operand;
          });
          if (isExistOperand) return null;

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
        onClick={ handleClick }
      >
        Adicionar Filtro
      </button>
    </div>
  );
}

export default FilterByNumericValues;
