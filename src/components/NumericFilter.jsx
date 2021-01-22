import React, { useContext, useState } from 'react';
import SWContext from '../context/SWContext';

function NumericFilter() {
  const context = useContext(SWContext);
  const [column, setColumn] = useState();
  const [comparison, setComparison] = useState();
  const [value, setValue] = useState();
  const btnClick = () => {
    context.setNumericFilter({ column, comparison, value });
  };
  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => setColumn(target.value) }
        value={ column }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => setComparison(target.value) }
        value={ comparison }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        type="number"
        onChange={ ({ target }) => setValue(target.value) }
        data-testid="value-filter"
        value={ value }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => btnClick() }
      >
        Adicionar
      </button>
    </div>
  );
}

export default NumericFilter;
