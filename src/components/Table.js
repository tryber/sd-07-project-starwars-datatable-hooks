import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const {
    data,
    filters,
    setFilters,
    filterHandler,
    setFilterHandler,
  } = useContext(StarWarsContext);

  function handleChangeName({ target }) {
    const prevFilters = filters;
    setFilters({
      ...prevFilters,
      filterByName: { name: target.value },
    });
  }

  function handleChangeSelected({ target }) {
    const prevFilters = filterHandler;
    const { name, value } = target;
    setFilterHandler({
      ...prevFilters,
      [name]: value,
    });
  }

  function addFilter() {
    const prevFilters = filters;
    setFilters({
      ...prevFilters,
      filterByNumericValues: [...prevFilters.filterByNumericValues, filterHandler],
    });
  }

  return (
    <div>
      <div>
        <label htmlFor="filter-text">
          Filter By Name:
          <input
            type="text"
            name="filter-text"
            data-testid="name-filter"
            value={ filters.filterByName.name }
            onChange={ handleChangeName }
          />
        </label>
        <label htmlFor="column">
          <select
            name="column"
            data-testid="column-filter"
            value={ filters.filterByNumericValues.column }
            onChange={ handleChangeSelected }
          >
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
        </label>
        <label htmlFor="comparison">
          <select
            name="comparison"
            data-testid="comparison-filter"
            value={ filters.filterByNumericValues.comparison }
            onChange={ handleChangeSelected }
          >
            <option value="maior que">bigger then</option>
            <option value="menor que">less than</option>
            <option value="igual a">equal to</option>
          </select>
        </label>
        <label htmlFor="value">
          <input
            data-testid="value-filter"
            name="value"
            value={ filters.filterByNumericValues.value }
            onChange={ handleChangeSelected }
          />
        </label>
        <button type="button" data-testid="button-filter" onClick={ addFilter }>
          Add Filters
        </button>
      </div>
      {!data.length ? (
        <div>Loading...</div>
      ) : (
        <table>
          <thead>
            <tr>
              {Object.keys(data[0]).map((element, index) => (
                <th key={ index }>{ element }</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, keys) => (
              <tr key={ keys }>
                { Object.values(item).map((element, index) => (
                  <td key={ index }>{ element }</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Table;
