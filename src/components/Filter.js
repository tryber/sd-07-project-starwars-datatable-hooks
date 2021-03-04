import React, { useContext, useState } from 'react';
import MyContext from '../context/MyContext';

function FilterPlanets() {
  const { filters, setFilters } = useContext(MyContext);
  const [aux, setAux] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

  const handleClick = () => {
    setFilters({
      ...filters, filterByNumericValues: [...filters.filterByNumericValues, aux] });
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
          <option value="population">Population</option>
          <option value="orbital_period">Orbital Period</option>
          <option value="diameter">Diameter</option>
          <option value="rotation_period">Rotation Period</option>
          <option value="surface_water">Surface Water</option>
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
          <option value="maior_que">maior que</option>
          <option value="menor_que">menor que</option>
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
          // onChange={ (event) => handleChangeComparison(event) }
        >
          <option>Name</option>
          <option>Rotation Period</option>
          <option>Orbital Period</option>
          <option>Diameter</option>
          <option>Climate</option>
          <option>Gravity</option>
          <option>Terrain</option>
          <option>Surface Water</option>
          <option>Population</option>
          <option>Films</option>
          <option>Created</option>
          <option>Edited</option>
          <option>URL</option>
        </select>

        <label htmlFor="sort">
          ASC
          <input
            type="radio"
            data-testid="column-sort-input-asc"
            value="ASC"
            name="sort"
          />
        </label>

        <label htmlFor="sort">
          DESC
          <input
            type="radio"
            data-testid="column-sort-input-desc"
            value="DESC"
            name="sort"
          />
        </label>

      </label>
      <button
        data-testid="column-sort-button"
        type="button"
        /* onClick={ (event) => handleClickNumericValues(event) } */
      >
        Ordenar
      </button>

    </div>
  );
}

export default FilterPlanets;
