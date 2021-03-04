import React, { useContext, useState } from 'react';
import MyContext from '../context/MyContext';

function FilterPlanets() {
  const { filters, setFilters } = useContext(MyContext);
  const [orderRadio, setOrderRadio] = useState({
    column: 'name',
    sort: 'ASC',
  });
  const [aux, setAux] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

  const handleClick = () => {
    setFilters({
      ...filters, filterByNumericValues: [...filters.filterByNumericValues, aux] });
  };

  const handleClickOrder = () => {
    setFilters({
      ...filters, order: orderRadio });
  };

  const resetTable = (index) => {
    filters.filterByNumericValues.splice(index, 1);
    setFilters({ ...filters, filterByNumericValues: [...filters.filterByNumericValues] });
  };

  return (
    <div>
      <label htmlFor="name-filter">
        Filtro de Planetas
        <input
          type="text"
          id="name-filter"
          data-testid="name-filter"
          placeholder="Digite o nome do planeta"
          onChange={ (event) => setFilters({
            ...filters, filterByName: { name: event.target.value } }) }
        />

      </label>
      <label htmlFor="valor-numerico">
        Valores Numéricos
        <select
          data-testid="column-filter"
          name="valor-numerico"
          id="valor-numerico"
          onChange={ (event) => setAux({ ...aux, column: (event.target.value) }) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>

      <label
        htmlFor="valor-numerico"
      >
        Filtro de Comparação
        <select
          data-testid="comparison-filter"
          name="comparison"
          id="comparison"
          onChange={ (event) => setAux({ ...aux, comparison: (event.target.value) }) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>

      <label
        htmlFor="valor_filtro"
      >
        Valor do filtro
        <input
          data-testid="value-filter"
          type="number"
          name="valor_filtro"
          id="valor_filtro"
          placeholder="Digite apenas numeros"
          onChange={ (event) => setAux({ ...aux, value: (event.target.value) }) }
        />
      </label>
      {console.log(aux)}
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => handleClick() }
      >
        FILTRO
      </button>

      <label
        htmlFor="valor-numerico"
      >
        Filtro de Ordenação
        <select
          data-testid="column-sort"
          name="comparison"
          id="comparison"
          onChange={ (event) => setOrderRadio({
            ...orderRadio, column: (event.target.value) }) }
        >
          <option value="name">Name</option>
          <option value="rotation_period">Rotation Period</option>
          <option value="orbital_period">Orbital Period</option>
          <option value="diameter">Diameter</option>
          <option value="climate">Climate</option>
          <option value="gravity">Gravity</option>
          <option value="terrain">Terrain</option>
          <option value="surface_water">Surface Water</option>
          <option value="population">Population</option>
          <option value="films">Films</option>
          <option value="created">Created</option>
          <option value="edited">Edited</option>
          <option value="url">URL</option>
        </select>

        <label htmlFor="sort">
          ASC
          <input
            type="radio"
            data-testid="column-sort-input-asc"
            value="ASC"
            name="sort"
            onClick={ (event) => setOrderRadio({
              ...orderRadio, sort: (event.target.value) }) }
          />
        </label>

        <label htmlFor="sort">
          DESC
          <input
            type="radio"
            data-testid="column-sort-input-desc"
            value="DESC"
            name="sort"
            onClick={ (event) => setOrderRadio({
              ...orderRadio, sort: (event.target.value) }) }
          />
        </label>

      </label>
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={ () => handleClickOrder() }
      >
        Ordenar
      </button>

      <div />
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
                onClick={ () => resetTable(index) }
              >
                X
              </button>
            </p>
          )) }
      </div>
    </div>
  );
}

export default FilterPlanets;
