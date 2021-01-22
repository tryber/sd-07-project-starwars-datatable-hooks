import React, { useContext, useRef } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';

function NumberFilter() {
  const column = useRef(null);
  const comparison = useRef(null);
  const value = useRef(null);

  const { setFilters } = useContext(StarWarsContext);

  const onNumberChange = () => {
    setFilters({
      filterByNumericValues: [
        {
          column: column.current.value,
          comparison: comparison.current.value,
          value: value.current.value,
        },
      ],
    });
  };

  return (
    <>
      <select
        data-testid="column-filter"
        ref={ column }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        ref={ comparison }
      >
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>
      <input
        data-testid="value-filter"
        ref={ value }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ onNumberChange }
      >
        Adicionar filtro
      </button>
    </>
  );
}

export default NumberFilter;
