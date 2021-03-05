import React from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterBar() {
  const {
    onNameChange,
    options,
    setColumn1,
    setComparison1,
    setValue1,
    onClickFilter,
    filters,
    removeFilter,
  } = React.useContext(StarWarsContext);

  React.useEffect(() => {

  }, [filters]);

  return (
    <div>
      <form>
        <label htmlFor="Name">
          Name:
          <input
            id="name"
            name="name"
            type="text"
            data-testid="name-filter"
            onChange={ (event) => onNameChange(event.target.value) }
          />
        </label>
        <select
          name="column-filter"
          data-testid="column-filter"
          onChange={ (event) => setColumn1(event.target.value) }
        >
          {options.map((item) => (
            <option key={ item } value={ item }>{item}</option>
          ))}
        </select>
        <select
          name="comparison-filter"
          data-testid="comparison-filter"
          onChange={ (event) => setComparison1(event.target.value) }
        >
          <option value="maior que">
            maior que
          </option>
          <option value="menor que">
            menor que
          </option>
          <option value="igual a">
            igual a
          </option>
        </select>
        <input
          type="number"
          data-testid="value-filter"
          onChange={ (event) => setValue1(event.target.value) }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ onClickFilter }
        >
          Filtrar
        </button>
        {
          filters.filterByNumericValues.map((item, index) => (
            <div div key={ index } data-testid="filter">
              <span>
                {`Filtrado: ${item.column} ${item.comparison} ${item.value}`}
              </span>
              <button
                type="button"
                onClick={ () => removeFilter(index) }
              >
                X
              </button>
            </div>
          ))
        }
      </form>
    </div>
  );
}

export default FilterBar;
