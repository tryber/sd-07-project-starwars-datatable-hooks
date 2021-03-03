import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StartWarsContext';

function Form() {
  const {
    options,
    filters,
    orderOpt,
    setClick,
    setFilters,
  } = useContext(StarWarsContext);

  const [aux, setAux] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

  const [orderRadio, setOrderRadio] = useState({
    order: 'name',
    sort: 'ASC',
  });

  const handleClickSearch = () => {
    const { column, value } = aux;
    if (column && value) {
      setFilters({ ...filters,
        filterByNumericValues: [...filters.filterByNumericValues, aux] });
      const newOptions = options.filter((option) => option !== column)[0];
      setAux({ column: newOptions, comparison: aux.comparison, value: '' });
    }
    setClick(true);
  };

  const handleClickOrder = () => {
    // const { order } = order;
    setFilters({ ...filters, order: orderRadio });
    setClick(true);
  };

  const reset = (index) => {
    filters.filterByNumericValues.splice(index, 1);
    setFilters({ ...filters,
      filterByNumericValues: [...filters.filterByNumericValues] });
  };

  const selectOptions = () => (
    <select
      id="column"
      data-testid="column-filter"
      name="column"
      onChange={ (event) => {
        setAux({ ...aux, column: (event.target.value) });
      } }
    >
      { options
        .map((column) => (
          <option key={ column } value={ `${column}` }>
            { column }
          </option>
        ))}
    </select>
  );

  const selectOrderOptions = () => (
    <select
      id="column"
      data-testid="column-sort"
      name="column-sort"
      onChange={ (event) => {
        setOrderRadio({ ...orderRadio, order: event.target.value });
      } }
    >
      { orderOpt
        .map((column) => (
          <option key={ column } value={ `${column}` }>
            { column }
          </option>
        ))}
    </select>
  );

  return (
    <div>
      <form>
        <span>Filtrar por planeta: </span>
        <input
          type="text"
          data-testid="name-filter"
          placeholder="Search by name"
          name="name"
          onChange={ (event) => setFilters(
            { ...filters, filterByName: { name: event.target.value } },
          ) }
        />
        <span> Opções: </span>
        { selectOptions() }
        <span>  </span>
        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={ (event) => setAux({ ...aux, comparison: (event.target.value) }) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <span>  </span>
        <input
          type="number"
          data-testid="value-filter"
          placeholder="value"
          name="value"
          value={ filters.filterValue }
          onChange={ (event) => setAux({ ...aux, value: (event.target.value) }) }
        />
        <span>  </span>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => handleClickSearch() }
        >
          Search by value
        </button>
        <br />
        <span>  Ordenar: </span>
        { selectOrderOptions() }
        <label htmlFor="ASC">
          <input
            type="radio"
            data-testid="column-sort-input-asc"
            name="order"
            value="ASC"
            onClick={ (event) => setOrderRadio({
              ...orderRadio, sort: (event.target.value) }) }
          />
          ASC
        </label>
        <label htmlFor="DESC">
          <input
            type="radio"
            data-testid="column-sort-input-desc"
            name="order"
            value="DESC"
            onClick={ (event) => setOrderRadio({
              ...orderRadio, sort: (event.target.value) }) }
          />
          DESC
        </label>
        <span> </span>
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ () => handleClickOrder() }
        >
          Ordenar
        </button>
      </form>
      <br />
      <div>
        { filters.filterByNumericValues
          .map((element, index) => (
            <p key={ index } data-testid="filter">
              <span><b>Filtro aplicado: </b></span>
              <span>{ element.column }</span>
              <span> - </span>
              <span>{ element.comparison }</span>
              <span> - </span>
              <span>{ element.value }</span>
              <span> </span>
              <button
                type="button"
                name="button"
                onClick={ () => reset(index) }
              >
                X
              </button>
            </p>
          )) }
        <br />
      </div>
    </div>
  );
}

export default Form;
