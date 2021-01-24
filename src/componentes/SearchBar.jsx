import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchBar() {
  const { filterNameInput, setComparaNumeros, setChooseColumn, setInputNumber, testPorEnquanto } = useContext(StarWarsContext);
  return (
    <form>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ (event) => filterNameInput(event) }
      />
      <select
        data-testid='column-filter'
        onChange={({ target }) => { setChooseColumn(target.value) }}
      >
        <option>Selecione</option>
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        data-testid='comparison-filter'
        onChange={({ target }) => { setComparaNumeros(target.value) }}
      >
        <option>Selecione</option>
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        type="number"
        data-testid='value-filter'
        onChange={ ({ target }) => setInputNumber(target.value) }
      />
      <button
      type="button"
        data-testid='button-filter'
        onClick={() => testPorEnquanto()}
      >
        Filtrar
      </button>
    </form>
  );
}

export default SearchBar;
