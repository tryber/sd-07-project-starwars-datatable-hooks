import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Filters = () => {
  const { filters, setFilters, starWars, setStarWars } = useContext(StarWarsContext);

  const handleFilter = (({ target }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: target.value,
      },
    });
  });

  // pesquisa feita para converter string em number
  // https://stackabuse.com/javascript-convert-string-to-number/

  const handleFilterButton = () => {
    const { column, comparison, value } = filters.filterByNumericValues[0];

    console.log(value);

    if (comparison === 'maior que') {
      const results = starWars.filter((item) => +value < item[column]);
      return setStarWars(results);
    } if (comparison === 'menor que') {
      const results = starWars.filter((item) => +value > item[column]);
      return setStarWars(results);
    } if (comparison === 'igual a') {
      const results = starWars.filter((item) => value === item[column]);
      return setStarWars(results);
    }
  };

  const handleFilterNumeric = ({ target }) => {
    const { name, value } = target;
    setFilters({
      ...filters,
      filterByNumericValues: [{
        ...filters.filterByNumericValues[0],
        [name]: value,
      }],
    });
  };

  const onlyNumber = (event) => {
    const theEvent = event || window.event;
    let key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    const regex = /^[0-9.]+$/;
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
    }
  };

  return (
    <div>
      <label htmlFor="name-filter">
        Digite sua busca:
        <input
          name="name"
          data-testid="name-filter"
          type="text"
          onChange={ handleFilter }
        />
      </label>
      <label htmlFor="number-filter">
        Filtros:
        <select
          name="column"
          data-testid="column-filter"
          onChange={ handleFilterNumeric }
        >
          <option value="">Selecione um filtro</option>
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select
          name="comparison"
          data-testid="comparison-filter"
          onChange={ handleFilterNumeric }
        >
          <option value="">Selecione um filtro</option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          data-testid="value-filter"
          type="text"
          name="value"
          onKeyPress={ onlyNumber }
          onChange={ handleFilterNumeric }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleFilterButton }
      >
        Filtrar
      </button>
    </div>
  );
};

export default Filters;
