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
    resetFilter,
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

      <div data-testid="filter">
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
        <button
          type="button"
          onClick={ resetFilter }
        >
          X
        </button>
      </div>

      <div>
        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={ (e) => setComparison(e.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <button
          type="button"
          data-testid="filter"
          onClick={ resetFilter }
        >
          X
        </button>
      </div>

      <div>
        <input
          type="number"
          data-testid="value-filter"
          placeholder="value"
          name="value"
          onChange={ (e) => setValue(e.target.value) }
        />
        <button
          type="button"
          data-testid="filter"
          onClick={ resetFilter }
        >
          X
        </button>
      </div>

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
