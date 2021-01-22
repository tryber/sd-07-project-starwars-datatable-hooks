import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterText() {
  const { handlerChange, handlerClick, columns } = useContext(StarWarsContext);

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        onChange={ handlerChange }
        name="name"
      />
      <select
        name="column"
        data-testid="column-filter"
        onChange={ handlerChange }
      >
        {columns.map((value) => <option key={ value } value={ value }>{value}</option>)}
      </select>
      <select
        name="comparison"
        data-testid="comparison-filter"
        onChange={ handlerChange }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        name="value"
        onChange={ handlerChange }
      />
      <button
        onClick={ handlerClick }
        type="button"
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </div>
  );
}

export default FilterText;
