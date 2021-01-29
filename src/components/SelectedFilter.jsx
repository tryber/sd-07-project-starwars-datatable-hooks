import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SelectedFilter() {
  const { addFilter, saveFilter, filterdColumn } = useContext(StarWarsContext);

  const condicao = ['', 'maior que', 'menor que', 'igual a'];
  const [column, setColumn] = useState();
  const [comparison, setComparison] = useState();
  const [value, setValue] = useState();

  const param = {
    column,
    comparison,
    value,
  };
  if (saveFilter) {
    return (
      <div>
        <label htmlFor="column">
          selecione uma coluna
          <select
            id="column"
            data-testid="column-filter"
            onChange={ ({ target }) => setColumn(target.value) }
          >
            {filterdColumn.map((col, index) => (
              <option key={ index }>{col}</option>
            ))}
          </select>
        </label>
        <lable htmlFor="comparison">
          Selecione uma condição
          <select
            id="comparison"
            data-testid="comparison-filter"
            onChange={ ({ target }) => setComparison(target.value) }
          >
            {condicao.map((col, index) => (
              <option key={ index }>{col}</option>
            ))}
          </select>
        </lable>
        <lable htmlFor="value">
          Digite um numero
          <input
            id="value"
            data-testid="value-filter"
            type="number"
            onChange={ ({ target }) => setValue(target.value) }
          />
        </lable>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => addFilter(param) }
        >
          Filtrar
        </button>
        {saveFilter.map((col, index) => (
          <p key={ index }>
            {`Coluna: ${col.coluna} - Condição: ${col.comparar} - Valor: ${col.valor}`}
          </p>
        ))}
      </div>
    );
  }
  return (
    <div>
      <label htmlFor="column">
        selecione uma coluna
        <select
          id="column"
          data-testid="column-filter"
          onChange={ ({ target }) => setColumn(target.value) }
        >
          {filterdColumn.map((col, index) => (
            <option key={ index }>{col}</option>
          ))}
        </select>
      </label>
      <lable htmlFor="comparison">
        Selecione uma condição
        <select
          id="comparison"
          data-testid="comparison-filter"
          onChange={ ({ target }) => setComparison(target.value) }
        >
          {condicao.map((col, index) => (
            <option key={ index }>{col}</option>
          ))}
        </select>
      </lable>
      <lable htmlFor="value">
        Digite um numero
        <input
          id="value"
          data-testid="value-filter"
          type="number"
          onChange={ ({ target }) => setValue(target.value) }
        />
      </lable>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => addFilter(param) }
      >
        Filtrar
      </button>
    </div>
  );
}

export default SelectedFilter;
