import React, { useContext } from 'react';
import StarWarsContext from '../context/StartWarsContext';

function Form() {
  const { options, filters, setClick, setFilters, setName, setOptions } = useContext(StarWarsContext);

  const selectOptions = () => (
    <select
      data-testid="column-filter"
      name="column"
      onChange={ (event) => { setFilters({
        ...filters, filterOption: (event.target.value),
      });
      setOptions({ ...options, [event.target.value]: false });
      } }
    >
      { !options
        ? null
        : Object.keys(options)
          .map((column, index) => (
            <option key={ index } value={ `${column}` }>
              {
                !options[column]
                  ? null
                  : column
              }
            </option>
          ))}
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
          onChange={ (event) => setName(event.target.value) }

        />
        { selectOptions() }
        <button
          type="button"
        // onClick={  }
        >
          X
        </button>
        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={ (event) => setFilters({ ...filters, filterComparison: (event.target.value) }) }
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
          onChange={ (event) => setFilters({ ...filters, filterValue: (event.target.value) }) }
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
          onClick={ () => setClick(true) }
        >
          Search by value
        </button>
      </form>
    </div>
  );
}

export default Form;
