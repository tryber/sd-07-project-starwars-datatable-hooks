import React, { useContext, useState } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

function Form() {
  const { handleNameFilterInput,
    filterByNumericValues,
  } = useContext(StarWarsContext);
    const [column, setColumn] = useState('');
    const [comparison, setComparison] = useState('');
    const [value, setValue] = useState('');

    const handleClick = () => {
      filterByNumericValues({column, comparison, value});
    }

  return (
    <form>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="Filtrar por nome"
        onChange={ handleNameFilterInput }
      />
      <select
        data-testid='column-filter'
        value={ column }
        onChange={ ({ target }) => setColumn(target.value) }
      >
        <option>Selecionar colunas</option>
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select data-testid='comparison-filter'
        value={ comparison }
        onChange={ ({ target }) => setComparison(target.value) }>
        <option>Comparar</option>
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        type="number"
        placeholder="Valor"
        value={ value }
        onChange={ ({ target }) => setValue(target.value) }
      />
      <button
      data-testid='button-filter'
      type="button"
      onClick={ handleClick }>
        Adicionar filtro numérico
      </button>
    </form>
  );
}

export default Form;
