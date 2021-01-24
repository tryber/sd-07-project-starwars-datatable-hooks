import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function SearchForm() {
  const {
    planets,
    filters,
    handleChangeName,
    setFilteredPlanets } = useContext(PlanetsContext);
  const { filterByName: { name } } = filters;
  useEffect(() => {
    if (planets.results !== undefined) {
      const filterPlanetsByName = async () => {
        if (name !== '') {
          setFilteredPlanets(
            planets.results.filter((planet) => planet.name.includes(name)),
          );
        } else {
          setFilteredPlanets(planets.results);
        }
      };
      filterPlanetsByName();
    }
  }, [setFilteredPlanets, name, planets]);
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
                onChange={ (({ target: { value } }) => {
                  handleChangeName(value);
                }) }
                value={ name }
              />
            </form>
          )
          : 'Loading...'
      }
    </div>
  );
}

export default SearchForm;
