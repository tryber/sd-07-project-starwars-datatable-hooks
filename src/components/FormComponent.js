import React, { useContext } from 'react';
import StarWarsContext from '../context/StartWarsContext';

function Form() {
  const { setFilters } = useContext(StarWarsContext);
  const options = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const selectOptions = () => (
    <select
      data-testid="column-filter"
      name="column"
      // onChange={(e) => setColumn(e.target.value)}
    >
      {
        options.map((column, index) => (
          <option key={ index } value={ `${column}` }>
            { column }
          </option>
        ))
      }
    </select>
  );

  return (
    <div>
      <form>
        <input
          type="text"
          data-testid="name-filter"
          placeholder="Search by name"
          name="name"
          onChange={ (event) => setFilters({ filterName: (event.target.value) }) }

        />
        { selectOptions(options) }
        <button
          type="button"
        // onClick={ resetFilter }
        >
          X
        </button>
        <select
          data-testid="comparison-filter"
          name="comparison"
        // onChange={ (e) => setComparison(e.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <button
          type="button"
          data-testid="filter"
        // onClick={ resetFilter }
        >
          X
        </button>
        <input
          type="number"
          data-testid="value-filter"
          placeholder="value"
          name="value"
        // onChange={ (e) => setValue(e.target.value) }
        />
        <button
          type="button"
          data-testid="filter"
        // onClick={ resetFilter }
        >
          X
        </button>
        <button
          type="button"
          data-testid="button-filter"
        // onClick={ filterByValue }
        >
          Search by value
        </button>
      </form>
    </div>
  );
}

export default Form;
