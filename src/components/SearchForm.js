import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function SearchForm() {
  const {
    planets,
    filters,
    addFilter,
    handleChangeName,
    setFilteredPlanets,
    setFilters,
    numericFiltersOptions,
    setNumericFiltersOptions } = useContext(PlanetsContext);
  const [
    currentFilter,
    setCurrentFilter,
  ] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  const {
    filterByName: {
      name: nameValue,
    },
    filterByNumericValues,
  } = filters;
  const {
    column: columnValue,
    comparison: comparisonValue,
    value: numericValue } = currentFilter;
  const { column } = numericFiltersOptions;
  const handleCurrentFilter = (name, value) => {
    setCurrentFilter((current) => (
      {
        ...current,
        [name]: value,
      }
    ));
  };

  const comparisonConverter = (planet, filter) => {
    const value = parseInt(filter.value, 10);
    if (filter.comparison === 'maior que') {
      return planet[filter.column] > value;
    }
    if (filter.comparison === 'menor que') {
      return planet[filter.column] < value;
    }
    return planet[filter.column] === filter.value;
  };

  useEffect(() => {
    if (planets.results !== undefined) {
      let filtered = planets.results;
      const filterPlanets = () => {
        if (filterByNumericValues.length) {
          filterByNumericValues.forEach((f) => {
            filtered = filtered.filter((planet) => comparisonConverter(planet, f));
            setFilteredPlanets(filtered);
          });
        }
        if (nameValue !== '') {
          setFilteredPlanets(
            filtered.filter((planet) => planet.name.includes(nameValue)),
          );
        }
        if (nameValue === '' && !filterByNumericValues.length) {
          setFilteredPlanets(filtered);
        }
      };
      filterPlanets();
    }
  }, [setFilteredPlanets, filterByNumericValues, nameValue, planets]);
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
                name="comparison"
                data-testid="comparison-filter"
                onChange={ ({ target: { name, value } }) => {
                  handleCurrentFilter(name, value);
                } }
                value={ comparisonValue }
              >
                {numericFiltersOptions.comparison.map((option) => (
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
                onClick={ () => {
                  addFilter(currentFilter);
                  setNumericFiltersOptions((prev) => (
                    {
                      column: column.filter((opt) => opt !== columnValue),
                      comparison: prev.comparison,
                    }
                  ));
                } }
              >
                Adicionar Filtro
              </button>
            </form>
          )
          : 'Loading...'
      }
      {filterByNumericValues
        ? filterByNumericValues.map((f) => (
          <div key={ f.column } data-testid="filter">
            {f.column}
            <button
              type="button"
              onClick={ () => {
                setFilters((prev) => (
                  {
                    ...prev,
                    filterByNumericValues: filterByNumericValues.filter((filt) => filt !== f),
                  }

                ));
                setNumericFiltersOptions((prev) => (
                  {
                    ...prev,
                    column: [...prev.column, f.column],
                  }
                ));
              } }
            >
              x
            </button>
          </div>
        ))
        : null }
    </div>
  );
}

export default SearchForm;
