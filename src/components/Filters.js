import React, { useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filters() {
  const {
    planets,
    setFilteredPlanets,
  } = useContext(StarWarsContext);

  const planetInfos = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  const zero = 0;

  const [comparison, setComparison] = useState('maior que');
  const [number, setNumber] = useState(zero);
  const [info, setInfo] = useState('population');

  const handleClick = () => {
    if (comparison === 'maior que') {
      return setFilteredPlanets(
        planets
          .filter((planet) => parseFloat(planet[info]) > parseFloat(number)),
      );
    } if (comparison === 'menor que') {
      return setFilteredPlanets(
        planets
          .filter((planet) => parseFloat(planet[info]) < parseFloat(number)),
      );
    } if (comparison === 'igual a') {
      return setFilteredPlanets(
        planets
          .filter((planet) => Number(planet[info]) === Number(number)),
      );
    }
    return setFilteredPlanets(planets);
  };

  const filteringByName = (name) => {
    const filteredByName = planets.filter((planet) => (
      planet.name.toLowerCase().includes(name.toLowerCase())));
    return setFilteredPlanets(filteredByName);
  };

  return (
    <div>
      <input
        onChange={ (event) => filteringByName(event.target.value) }
        name="search-bar"
        type="text"
        data-testid="name-filter"
        placeholder="Encontre o planeta"
      />

      <select
        onChange={ (e) => setInfo(e.target.value) }
        data-testid="column-filter"
      >
        {planetInfos.map((infoPlanet) => (
          <option key={ infoPlanet }>{infoPlanet}</option>
        ))}
      </select>
      <select
        onChange={ (e) => setComparison(e.target.value) }
        data-testid="comparison-filter"
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        onChange={ (e) => setNumber(e.target.value) }
        type="number"
        data-testid="value-filter"
        placeholder="digite um número"
      />
      <button
        onClick={ () => {
          handleClick();
        } }
        type="button"
        data-testid="button-filter"
      >
        Buscar
      </button>
    </div>
  );
}

export default Filters;
