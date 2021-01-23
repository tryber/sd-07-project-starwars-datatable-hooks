import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StartWarsContext';

function NumbersFilter() {
  const zero = 0;
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(zero);

  const { filterByNumericValues } = useContext(StarWarsContext);

  const handleClick = () => {
    filterByNumericValues({ column, comparison, value });
  };

  return (
    <form>
      <select
        name="column"
        data-testid="column-filter"
        onChange={ (event) => setColumn(event.target.value) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="rotation_period">rotation_period</option>
        <option value="diameter">diameter</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        name="comparison"
        data-testid="comparison-filter"
        onChange={ (event) => setComparison(event.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>
      <input
        name="value"
        type="number"
        onChange={ (event) => setValue(event.target.value) }
        data-testid="value-filter"
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Adicionar Filtro
      </button>
    </form>
  );
}

export default NumbersFilter;
