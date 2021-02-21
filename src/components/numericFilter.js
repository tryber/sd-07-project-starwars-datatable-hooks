import React, { useContext, useCallback, useState } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

function NumericFilter() {
  const { setFilter, filter } = useContext(StarWarsContext);
  const [columns, setColumns] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [comparison] = useState([
    'maior que',
    'menor que',
    'igual a',
  ]);

  const [filtersByNumericInput, setFiltersByNumericInput] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

  const checkIfIsNotEmpty = useCallback(() => {
    if (filtersByNumericInput.column !== ''
  && filtersByNumericInput.comparison !== ''
  && filtersByNumericInput.value !== '') {
      return true;
    } return false;
  }, [filtersByNumericInput]);

  const checkIfIsDuplicated = useCallback((column) => {
    let duplicated;
    const zero = 0;

    for (let index = zero; index < filter.filterByNumericValues.length; index = +1) {
      const element = filter.filterByNumericValues[index];
      if (element.column === column) {
        duplicated = true;
      } else {
        duplicated = false;
      }
    }

    return duplicated;
  }, [filter.filterByNumericValues]);

  const sendFilters = useCallback(() => {
    if (checkIfIsNotEmpty() && !checkIfIsDuplicated(filtersByNumericInput.column)) {
      setFilter({ ...filter,
        filterByNumericValues: [...filter.filterByNumericValues,
          filtersByNumericInput] });
      setColumns(
        columns.filter((column) => column !== filtersByNumericInput.column),
      );
    }
  },
  [checkIfIsDuplicated,
    checkIfIsNotEmpty,
    columns, filter, filtersByNumericInput, setFilter]);

  return (
    <div className="formWrapper">
      <label htmlFor="label">
        Coluna
        <select
          data-testid="column-filter"
          onChange={ () => {
            setFiltersByNumericInput({ ...filtersByNumericInput, column: value });
          } }
        >
          <option key="Selecione" value="">Selecione uma coluna</option>
          { columns.map((column) => (
            <option key={ column } value={ column }>
              {column}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="label">
        Comparação
        <select
          data-testid="comparison-filter"
          onChange={ ({ target: { value } }) => setFiltersByNumericInput(
            { ...filtersByNumericInput,
              comparison: value,
            },
          ) }
        >
          <option key="Selecione" value="">Selecione uma comparação</option>
          {comparison.map((items) => (
            <option key={ items }>{items}</option>))}
        </select>
      </label>
      <label htmlFor="labe">
        Valor
        <input
          type="number"
          placeholder="Selecione um valor"
          data-testid="value-filter"
          onChange={ ({ target: { value } }) => setFiltersByNumericInput(
            { ...filtersByNumericInput,
              value },
          ) }
        />
      </label>
      <button
        type="submit"
        data-testid="button-filter"
        onClick={ () => sendFilters() }
      >
        filtro
      </button>
    </div>);
}

export default NumericFilter;
