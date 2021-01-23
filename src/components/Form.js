import React, { useContext, useState } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

function Form() {
  const { handleNameFilterInput,
    addNumericFilter,
    filters,
  } = useContext(StarWarsContext);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');

  const { filterByNumericValues } = filters;

  const columnSelection = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const handleClick = () => {
    addNumericFilter({ column, comparison, value });
    setColumn('');
    setComparison('');
    setValue('');
  };

  const checkSelected = (entry) => {
    let columnSelected = false;
    filterByNumericValues.forEach((filter) => {
      columnSelected = (entry === filter.column);
      if (columnSelected) return null;
    });
    if (columnSelected) return true;
  };

  return (
    <form className="border">
      <div className="nav justify-content-center">
        <input
          data-testid="name-filter"
          type="text"
          placeholder="Filtrar por nome"
          onChange={ handleNameFilterInput }
        />
        <select
          className="form-select"
          data-testid="column-filter"
          onChange={ ({ target }) => setColumn(target.value) }
        >
          {columnSelection.map((col) => {
            if (checkSelected(col)) return null;
            return (<option value={ col } key={ col }>{col}</option>);
          })}
        </select>
        <select
          className="form-select"
          data-testid="comparison-filter"
          value={ comparison }
          onChange={ ({ target }) => setComparison(target.value) }
        >
          <option hidden>Comparação</option>
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
        <input
          type="number"
          placeholder="Valor"
          data-testid="value-filter"
          value={ value }
          onChange={ ({ target }) => setValue(target.value) }
        />
      </div>
      <div className="nav justify-content-center">
        <button
          className="btn btn-dark"
          data-testid="button-filter"
          type="button"
          onClick={ handleClick }
        >
          Adicionar filtro numérico
        </button>
      </div>
    </form>
  );
}

export default Form;
