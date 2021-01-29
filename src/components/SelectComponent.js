import React from 'react'

function SelectComponent(props) {
  const { setObjectFilter, selectFilter, updateListFunc, object} = props;
  return (
    <div>
      <select
        name="column"
        onMouseLeave={ setObjectFilter }
        onChange={ setObjectFilter }
        data-testid="column-filter"
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        name="comparison"
        onMouseLeave={ setObjectFilter }
        onChange={ setObjectFilter }
        data-testid="comparison-filter"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        name="value"
        onChange={ setObjectFilter }
        data-testid="value-filter"
        type="number"
      />
      <button
        onClick={ () => {
          selectFilter(object);
          updateListFunc(object);
        } }
        type="button"
        data-testid="button-filter"
      >
        Adicionar filtro
      </button>
    </div>
  );
}

export default SelectComponent;
