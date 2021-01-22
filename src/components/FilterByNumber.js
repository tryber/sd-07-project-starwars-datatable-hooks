import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterByNumber() {
  const all = useContext(StarWarsContext);
  const {
    changeColumn,
    changeComparison,
    changeNumber,
    comparison,
    column,
    number,
    Filtered,
    objectComplete,
  } = all;
  const arrayColumn = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  return (
    <div>
      <select
        onChange={ (e) => changeColumn(e) }
        data-testid="column-filter"
        value={ column }
      >
        {arrayColumn.filter((col) => col !== objectComplete.column)
          .map((item) => <option key={ item }>{ item }</option>)}

      </select>
      <select
        onChange={ (e) => changeComparison(e) }
        data-testid="comparison-filter"
        value={ comparison }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ (e) => changeNumber(e) }
        value={ number }
      />
      <button type="button" data-testid="button-filter" onClick={ Filtered }>
        Filtrar
      </button>
    </div>
  );
}

export default FilterByNumber;
