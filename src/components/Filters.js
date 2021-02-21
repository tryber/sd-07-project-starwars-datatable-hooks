import React, { useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filters() {
  const {
    planets,
    filters,
    setNumericFilter,
    setFilterByName,
    filteredPlanets,
    setFilteredPlanets,
  } = useContext(StarWarsContext);

  const { filterByName, filterByNumericValues } = filters;

  const planetInfos = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  const zero = 0;

  const [comparison, setComparison] = useState('maior que');
  const [number, setNumber] = useState(zero);
  const [info, setInfo] = useState('population');

  // const handleClick = () => {
  //   setFilterByNumericValues([{
  //     filterByNumericValues: filteredNumeric,
  //   }]);
  //   switch (comparison) {
  //   case 'maior que':
  //     return setFilteredNumeric(
  //       planets
  //         .filter((planet) => parseFloat(planet[info]) > parseFloat(number)),
  //     );
  //   case 'menor que':
  //     return setFilteredNumeric(
  //       planets
  //         .filter((planet) => parseFloat(planet[info]) < parseFloat(number)),
  //     );
  //   case 'igual a':
  //     return setFilteredNumeric(
  //       planets
  //         .filter((planet) => Number(planet[info]) === Number(number)),
  //     );
  //   default:
  //     return setFilterByNumericValues(planets);
  //   }
  // };

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
          // handleClick();
          // console.log(filteredNumeric);
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
