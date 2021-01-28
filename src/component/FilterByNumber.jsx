import React, { useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterByNumber() {
  const { setArrayPlanets, data } = useContext(StarWarsContext);

  const filterByNumericValues = [
    {
      column: 'population',
      comparison: 'maior que',
      value: '100000',
    },
  ];

  const [filterNumeric, setFilterNumeric] = useState(filterByNumericValues);

  const hadleChange = ({ target: { name, value } }) => {
    setFilterNumeric([{ ...filterNumeric[0], [name]: value }]);
  };

  const checkCompartion = (item) => {
    const { column, comparison, value } = filterNumeric[0];
    const valueInteger = parseInt(value, 10);
    const itemColumn = parseInt(item[column], 10);
    switch (comparison) {
    case 'maior que':
      return itemColumn > valueInteger;
    case 'menor que':
      return itemColumn < valueInteger;
    case 'igual a':
      return itemColumn === valueInteger;
    default:
      console.log('entrei no default');
      break;
    }
  };

  const filterPlanets = () => {
    const resultPlanets = data.filter((item) => checkCompartion(item));
    setArrayPlanets(resultPlanets);
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        name="column"
        onChange={ (event) => hadleChange(event) }
      >
        <option value="population" defaultValue>population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ (event) => hadleChange(event) }
      >
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>

      <input
        data-testid="value-filter"
        placeholder="apenas números"
        type="number"
        name="value"
        onChange={ (event) => hadleChange(event) }
      />

      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => filterPlanets() }
      >
        Buscar
      </button>
    </div>
  );
}

export default FilterByNumber;
