import React, { useContext, useState } from 'react';
import StarWarsContext from '../Provider/StarWarsContext';

function Filter() {
  const [ordenar, setInt] = useState({
    sort: '',
    column: '',
  });

  const setValue = (prevState, target, interator) => ({
    ...prevState,
    [interator]: target.value,
  });

  const {
    filter,
    filterPlanet,
    onFilter,
    setFilterValue,
    setFilterComparison,
    setFilterColumn,
    columnOption,
    appFilter,
    removeFilter,
    data,
    byOrder,
    // setOrder,
  } = useContext(StarWarsContext);

  // const { column, sort } = order;

  // console.log(order);
  const size = 0;
  const showFilter = () => {
    if (appFilter.length > size) {
      return appFilter.map((acc) => (
        <div className="app-filter" key={ acc.column }>
          <div data-testid="filter">
            {acc.value}
            |
            {acc.column}
            |
            {acc.comparioson}
            <button
              type="button"
              onClick={ ({ target }) => removeFilter(target.name) }
              className="remove"
              name={ acc.column }
            >
              x
            </button>
          </div>
        </div>
      ));
    }
  };

  const tableHead = (words) => Object.keys(words).filter((acc) => acc !== 'residents');

  const getOptions = () => {
    if (data.length === size) {
      return 'Loading ...';
    }
    return tableHead(data[0]).map((acc) => <option key={ acc }>{acc}</option>);
  };

  return (
    <div className="filter">
      <input
        type="text"
        name="serch"
        data-testid="name-filter"
        placeholder="Select your planet from confederation"
        className="input"
        onChange={ (event) => filterPlanet(event.target.value) }
        value={ filter.value }
      />
      <form>
        <select
          data-testid="column-filter"
          className="select-filter"
          onChange={ ({ target }) => setFilterColumn(target.value) }
        >
          {columnOption.map((acc) => (
            <option value={ acc } key={ acc }>
              {acc}
            </option>
          ))}
          {/* <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option> */}
        </select>
        <select
          data-testid="comparison-filter"
          className="select-filter"
          onChange={ ({ target }) => setFilterComparison(target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
          <option value="menor que">menor que</option>
        </select>
        <label htmlFor="input" className="label-filter">
          Value:
          <input
            type="number"
            data-testid="value-filter"
            id="input"
            className="filter-input"
            onChange={ ({ target }) => setFilterValue(target.value) }
          />
        </label>
        <button
          type="reset"
          data-testid="button-filter"
          className="btn-filter"
          onClick={ () => onFilter() }
        >
          Filtrar
        </button>
        <div className="form-order">
          Ordenar por:
          <select
            data-testid="column-sort"
            className="select-filter"
            onChange={ ({ target }) => setInt(setValue(ordenar, target, 'column')) }
          >
            {getOptions()}
          </select>
          <label htmlFor="ascendent">
            <input
              type="radio"
              name="order"
              value="ASC"
              id="ascendent"
              data-testid="column-sort-input-asc"
              onChange={ ({ target }) => setInt(setValue(ordenar, target, 'sort')) }
            />
            ASC
          </label>
          <label htmlFor="descendente">
            <input
              type="radio"
              name="order"
              value="DESC"
              id="descendente"
              data-testid="column-sort-input-desc"
              onChange={ ({ target }) => setInt(setValue(ordenar, target, 'sort')) }
            />
            DESC
          </label>
          <button
            type="button"
            data-testid="column-sort-button"
            onClick={ () => byOrder(ordenar) }
            className="btn-filter"
          >
            {' '}
            Ordenar
            {' '}
          </button>
        </div>
      </form>
      {showFilter()}
    </div>
  );
}

export default Filter;
