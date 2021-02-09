import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/starWarsContext';

function SearchBar() {
  const { planets, setFilterPlanets } = useContext(StarWarsContext);

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [numberValue, setNumberValue] = useState('0');

  const handleFilterName = (value) => {
    setFilterPlanets(
      planets.filter((planet) => planet.name.toLowerCase()
        .includes(value.toLowerCase())),
    );
  };

  const handleButton = () => {
    console.log('switch', column, comparison, numberValue);
    switch (comparison) {
    case 'maior que':
      setFilterPlanets(
        planets.filter(
          (planet) => parseFloat(planet[column]) > parseFloat(numberValue),
        ),
      );
      break;
    case 'menor que':
      setFilterPlanets(
        planets.filter(
          (planet) => parseFloat(planet[column]) < parseFloat(numberValue),
        ),
      );
      // console.log('menor que');
      break;
    case 'igual a':
      setFilterPlanets(
        planets.filter(
          (planet) => Number(planet[column]) === Number(numberValue),
        ),
      );
      break;
    default:
      setFilterPlanets(planets);
    }
  };

  const handleChangeColumn = ({ target: { value } }) => {
    setColumn(value);
  };

  const handleChangeComparison = ({ target: { value } }) => {
    setComparison(value);
  };

  const handleChangeNumber = ({ target: { value } }) => {
    setNumberValue(value);
    console.log('handlchange', value);
  };

  const filterOptions = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  return (
    <div>
      <label htmlFor="search">
        Filtre o filme pelo nome:
        <input
          name="search"
          type="text"
          data-testid="name-filter"
          onChange={ ({ target }) => handleFilterName(target.value) }
        />
      </label>
      <select data-testid="column-filter" onChange={ handleChangeColumn }>
        {filterOptions.map((option, index) => (
          <option key={ index }>{option}</option>
        ))}
      </select>
      <select data-testid="comparison-filter" onChange={ handleChangeComparison }>
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>
      <input
        name="numberSearch"
        type="number"
        data-testid="value-filter"
        value={ numberValue }
        onChange={ handleChangeNumber }
      />
      <button type="button" data-testid="button-filter" onClick={ handleButton }>
        Filtrar
      </button>
    </div>
  );
}

export default SearchBar;
