import React, { useContext } from 'react';
import StarWarsContext from './StarWarsContext';

const Filter = () => {
  const {
    filterText,
    handleColumnChange,
    handleComparisonChange,
    handleValueChange,
    form,
    handleClick,
  } = useContext(StarWarsContext);
  // console.log(Object.entries(filter)[0][1])
  // console.log(filter)
  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ (event) => filterText(event.target.value) }
      />
      {/* <div>
        {Object.entries(filter)[0][1]}
      </div> */}
      <label htmlFor="column-filter">
        <select
          id="column-filter"
          name="column-filter"
          data-testid="column-filter"
          value={ form.column }
          onChange={ (event) => handleColumnChange(event.target.value) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select
          id="comparison-filter"
          name="comparison-filter"
          data-testid="comparison-filter"
          value={ form.comparison }
          onChange={ (event) => handleComparisonChange(event.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <input
        name="value"
        value={ form.value }
        type="number"
        data-testid="value-filter"
        onChange={ (event) => handleValueChange(event.target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClick() }
      >
        Filtrar
      </button>
    </div>
  );
};

export default Filter;
