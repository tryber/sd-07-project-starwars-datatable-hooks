import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function SearchForm() {
  const {
    planets,
    filters,
    addFilter,
    handleChangeName,
    setFilteredPlanets } = useContext(PlanetsContext);
  const [
    currentFilter,
    setCurrentFilter,
  ] = useState({
    column: 'population',
    comparsion: 'maior que',
    value: 0,
  });
  const numericFiltersOptions = {
    column: [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ],
    comparsion: [
      'maior que',
      'menor que',
      'igual',
    ],
  };
  const {
    filterByName: {
      name: nameValue,
    },
    // filterByNumericValues,
  } = filters;
  const {
    column: columnValue,
    comparsion: comparsionValue,
    value: numericValue } = currentFilter;
  const handleCurrentFilter = (name, value) => {
    setCurrentFilter((current) => (
      {
        ...current,
        [name]: value,
      }
    ));
  };
  useEffect(() => {
    if (planets.results !== undefined) {
      const filterPlanetsByName = async () => {
        if (nameValue !== '') {
          setFilteredPlanets(
            planets.results.filter((planet) => planet.name.includes(nameValue)),
          );
        } else {
          setFilteredPlanets(planets.results);
        }
      };
      /*  const filterPlanetsByNumericValues = async () => {
        if (filterByNumericValues !== undefined) {
          setFilteredPlanets(
            planets.results.filter((planet) => planet.name.includes(nameValue)),
          );
        } else {
          setFilteredPlanets(planets.results);
        }
      };  */
      filterPlanetsByName();
    }
  }, [setFilteredPlanets, nameValue, planets]);
  return (
    <div>
      {
        planets
          ? (
            <form>
              <input
                data-testid="name-filter"
                type="text"
                placeholder="Nome"
                onChange={ ({ target: { value } }) => {
                  handleChangeName(value);
                } }
                value={ nameValue }
              />
              <select
                data-testid="column-filter"
                name="column"
                onChange={ ({ target: { name, value } }) => {
                  handleCurrentFilter(name, value);
                } }
                value={ columnValue }
              >
                {numericFiltersOptions.column.map((option) => (
                  <option
                    key={ option }
                    value={ option }
                  >
                    { option }
                  </option>
                ))}
              </select>
              <select
                name="comparsion"
                data-testid="comparsion-filter"
                onChange={ ({ target: { name, value } }) => {
                  handleCurrentFilter(name, value);
                } }
                value={ comparsionValue }
              >
                {numericFiltersOptions.comparsion.map((option) => (
                  <option
                    key={ option }
                    value={ option }
                  >
                    { option }
                  </option>
                ))}
              </select>
              <input
                name="value"
                data-testid="value-filter"
                type="number"
                placeholder="Número"
                onChange={ ({ target: { name, value } }) => {
                  handleCurrentFilter(name, value);
                } }
                value={ numericValue }
              />
              <button
                data-testid="button-filter"
                type="button"
                onClick={ () => addFilter(currentFilter) }
              >
                Adicionar Filtro
              </button>
            </form>
          )
          : 'Loading...'
      }
    </div>
  );
}

export default SearchForm;
