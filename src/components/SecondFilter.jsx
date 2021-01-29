import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SecondFilter() {
  const { filterdColumn } = useContext(StarWarsContext);

  const filterTwo = [
    '',
    'maior que',
    'menor que',
    'igual a',
  ];
  const [column, setColumn] = useState();
  const [comparison, setComparison] = useState();
  const [value, setValue] = useState();

  if (filterdColumn) {
    return (
      <div>
        <label htmlFor="column">
          selecione uma coluna
          <select
            id="column"
            data-testid="column-filter"
            value={ column }
            onChange={ ({ target }) => setColumn(target.value) }
          >
            {filterdColumn.map((col, index) => <option key={ index }>{col}</option>)}
          </select>
        </label>
        <lable htmlFor="comparison">
          Selecione uma condição
          <select
            id="comparison"
            data-testid="comparison-filter"
            value={ comparison }
            onChange={ ({ target }) => setComparison(target.value) }
          >
            {filterTwo.map((col, index) => <option key={ index }>{ col }</option>)}
          </select>
        </lable>
        <lable htmlFor="value">
          Digite um numero
          <input
            id="value"
            data-testid="value-filter"
            type="number"
            value={ value }
            onChange={ ({ target }) => setValue(target.value) }
          />
        </lable>
        <button type="button" data-testid="button-filter">Filtrar</button>
      </div>
    );
  }
  return (<p />);
}

export default SecondFilter;
