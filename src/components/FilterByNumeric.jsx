import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterByNumeric() {
  const getPlanetsStateGlobal = useContext(StarWarsContext);
  const { setFilterByNumericValues, data, setData } = getPlanetsStateGlobal;
  const [columnLocal, setColumnLocal] = useState('population');
  const [comparisonLocal, setComparisonLocal] = useState('maior que');
  const [valueLocal, setValueLocal] = useState('0');

  const addDataOnGlobalState = () => {
    setFilterByNumericValues({
      column: columnLocal,
      comparison: comparisonLocal,
      value: valueLocal,
    });
    switch (comparisonLocal) {
    case 'menor que':
      setData(data
        .filter((element) => parseInt(element[columnLocal], 10)
        < parseInt(valueLocal, 10)));
      break;
    case 'igual a':
      setData(data
        .filter((element) => parseInt(element[columnLocal], 10)
        === parseInt(valueLocal, 10)));
      break;
    case 'maior que':
      setData(data
        .filter((element) => parseInt(element[columnLocal], 10)
        > parseInt(valueLocal, 10)));
      break;
    default: setData(data);
      break;
    }
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        value={ columnLocal }
        onChange={ (event) => setColumnLocal(event.target.value) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        id="comparison-filter"
        data-testid="comparison-filter"
        value={ comparisonLocal }
        onChange={ (event) => setComparisonLocal(event.target.value) }
      >
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
        <option value="maior que">maior que</option>
      </select>
      <input
        id="value-filter"
        data-testid="value-filter"
        type="number"
        value={ valueLocal }
        onChange={ (event) => setValueLocal(event.target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ addDataOnGlobalState }
      >
        Adicionar
      </button>
    </div>
  );
}

export default FilterByNumeric;
