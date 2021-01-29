import React, { useState, useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterByNumber() {
  const filterValues = {
    column: 'population',
    comparison: 'maior que',
    value: '100000',
  };

  const { setArrayPlanets, data, setFilter, filter } = useContext(StarWarsContext);
  const [numericValues, setNumericValues] = useState(filterValues);

  const arrayOptions = [
    'population', 'orbital_period', 'diameter', 'rotation_period',
    'surface_water',
  ];

  const { filterByNumericValues } = filter;
  const arrayColums = filterByNumericValues.map(({ column }) => column);

  const checkCompartion = (item) => {
    const { column, comparison, value } = numericValues;
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
      break;
    }
  };

  const filterPlanets = () => {
    const resultPlanets = data.filter((item) => checkCompartion(item));
    setArrayPlanets(resultPlanets);
  };

  useEffect(() => {
    filterPlanets();
  }, [filter.filterByNumericValues]);

  const hadleChange = ({ target: { name, value } }) => {
    setNumericValues({ ...numericValues, [name]: value });
  };

  const updateFilter = () => {
    setFilter({ ...filter,
      filterByNumericValues: [...filter.filterByNumericValues, numericValues] });
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        name="column"
        onChange={ (event) => hadleChange(event) }
      >
        {
          arrayOptions
            .filter((phase) => !arrayColums.includes(phase))
            .map((option, i) => (<option key={ i } value={ option }>{ option }</option>))
        }
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
        onClick={ () => updateFilter() }
      >
        Buscar
      </button>
    </div>
  );
}

export default FilterByNumber;
