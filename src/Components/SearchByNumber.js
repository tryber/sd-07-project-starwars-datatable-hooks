import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchByNumber() {
  const globalState = useContext(StarWarsContext);
  const { data, inputNumbers, setInputNumbers, setFilteredPlanets } = globalState;
  const zero = 0;
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [number, setNumber] = useState(zero);

  const updateColumn = ({ target }) => {
    const { value } = target;
    setColumn(value);
  };

  const updateComparison = ({ target }) => {
    const { value } = target;
    setComparison(value);
  };

  const updateNumber = ({ target }) => {
    const { value } = target;
    const newNumber = Number(value);
    setNumber(newNumber);
  };

  const executeFilter = () => {
    setInputNumbers([
      ...inputNumbers,
      {
        column,
        comparison,
        number,
      },
    ]);
  };

  const clearFilter = () => {
    setInputNumbers([]);
    setFilteredPlanets(data);
  };

  return (
    <div>
      <select
        onChange={ updateColumn }
        data-testid="column-filter"
        value={ column }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        onChange={ updateComparison }
        data-testid="comparison-filter"
        value={ comparison }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ updateNumber }
        value={ number }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ executeFilter }
      >
        Acionar filtro
      </button>
      <button
        type="button"
        data-testid="filter"
        onClick={ clearFilter }
      >
        X
      </button>
    </div>
  );
}

export default SearchByNumber;
