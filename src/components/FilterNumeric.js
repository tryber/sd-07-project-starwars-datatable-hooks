import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const FilterNumeric = () => {
  const {
    onClickFilterBtn,
    changeColumn,
    changeComparison,
    changeNumber, column,
    comparison,
    number,
  } = useContext(StarWarsContext);
  return (
    <div>
      <label htmlFor="columnFilter">
        <select
          data-testid="column-filter"
          id="columnFilter"
          name="columnFilter"
          onChange={ (e) => changeColumn(e) }
          value={ column }
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
          data-testid="comparison-filter"
          id="comparison"
          name="comparison"
          onChange={ (e) => changeComparison(e) }
          value={ comparison }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="comparisonNumeric">
        <input
          type="number"
          data-testid="value-filter"
          name="comparisonNumeric"
          id="comparisonNumeric"
          onChange={ (e) => changeNumber(e) }
          value={ number }
        />
      </label>
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => onClickFilterBtn() }
      >
        Filtrar
      </button>
    </div>
  );
};

export default FilterNumeric;
