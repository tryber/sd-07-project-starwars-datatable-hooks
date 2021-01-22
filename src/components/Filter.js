import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filter() {
  const {
    setName,
    optionsOfColumn,
    setColumn,
    setComparison,
    setValue,
    filterByValue,
  } = useContext(StarWarsContext);

  return (
    <form>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Search by name"
        name="name"
        onChange={ (e) => setName(e.target.value) }
      />

      <select
        data-testid="column-filter"
        name="column"
        onChange={ (e) => setColumn(e.target.value) }
      >
        {
          optionsOfColumn.map((column, index) => (
            <option
              key={ index }
              value={ `${column}` }
            >
              {column}
            </option>
          ))
        }
      </select>

      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ (e) => setComparison(e.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        type="number"
        data-testid="value-filter"
        placeholder="value"
        name="value"
        onChange={ (e) => setValue(e.target.value) }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ filterByValue }
      >
        Search by value
      </button>
    </form>
  );
}

export default Filter;
