import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchBar() {
  const { filterNameInput,
    setComparaNumeros,
    setChooseColumn,
    setInputNumber,
    submitFilters } = useContext(StarWarsContext);

  const valueOfColumns = ({ value }) => {
    const indexForRotation = 1;
    const indexForOrbital = 2;
    const indexForDiameter = 3;
    const indexForSurface = 7;
    const indexForPopulation = 8;

    if (value === 'rotation_period') { setChooseColumn(indexForRotation); }
    if (value === 'orbital_period') { setChooseColumn(indexForOrbital); }
    if (value === 'diameter') { setChooseColumn(indexForDiameter); }
    if (value === 'surface_water') { setChooseColumn(indexForSurface); }
    if (value === 'population') { setChooseColumn(indexForPopulation); }
  };

  return (
    <form>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ (event) => filterNameInput(event) }
      />
      <label htmlFor="collumns">
        Choose a collumn
        <select
          name="collumns"
          data-testid="column-filter"
          onChange={ ({ target }) => { valueOfColumns(target); } }
        >
          <option value="population" key="population">population</option>
          <option value="orbital_period" key="orbital_period">orbital_period</option>
          <option value="diameter" key="diameter">diameter</option>
          <option value="rotation_period" key="rotation_period">rotation_period</option>
          <option value="surface_water" key="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparation">
        Choose a comparation method
        <select
          name="comparation"
          data-testid="comparison-filter"
          onChange={ ({ target }) => { setComparaNumeros(target.value); } }
        >
          <option value="maior que" key="maior que">maior que</option>
          <option value="menor que" key="menor que">menor que</option>
          <option value="igual a" key="igual a">igual a</option>
        </select>
      </label>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ ({ target }) => setInputNumber(target.value) }
      />
      <button
        data-testid="button-filter"
        onClick={ () => submitFilters() }
        type="reset"
      >
        Filtrar
      </button>
    </form>
  );
}

export default SearchBar;
