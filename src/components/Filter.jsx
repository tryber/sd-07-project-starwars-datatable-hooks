import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filter() {
  const { setFilterName, setFilterNumber } = useContext(StarWarsContext);

  const handleChange = ({ target }) => {
    setFilterName(target.value);
  };

  const handleClick = () => {
    const columnSelect = document.getElementById('column-filter').value;
    const comparisonSelect = document.getElementById('comparison-filter').value;
    const numberFilter = document.getElementById('number-filter').value;
    const filtering = {
      column: columnSelect,
      comparison: comparisonSelect,
      value: numberFilter,
    };
    setFilterNumber(filtering);
  };

  return (
    <div>
      <input onChange={handleChange} type="text" data-testid="name-filter" />
      <select data-testid="column-filter" id="column-filter">
        <option value="population" key="population">
          population
        </option>
        <option value="orbital_period" key="orbital_period">
          orbital_period
        </option>
        <option value="diameter" key="diameter">
          diameter
        </option>
        <option value="rotation_period" key="rotation_period">
          rotation_period
        </option>
        <option value="surface_water" key="surface_water">
          surface_water
        </option>
      </select>
      <select data-testid="comparison-filter" id="comparison-filter">
        <option hidden value="">
          Selecione
        </option>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input data-testid="value-filter" type="number" id="number-filter" />
      <button data-testid="button-filter" type="button" onClick={handleClick}>
        Filtrar
      </button>
    </div>
  );
}

export default Filter;
