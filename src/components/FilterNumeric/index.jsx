import React, { useContext, useState } from 'react';

import StarWarsContext from '../../context/StarWarsContext';

function FilterNumeric() {
  const [type, setType] = useState('population');
  const [compare, setCompare] = useState('maior que');
  const [number, setNumber] = useState('0');
  const [typeFilters, setTypeFilters] = useState([]);
  const [filterParameters, setFilterParameters] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const {
    filters: { filters: { filterByNumericValues } },
    setFilters,
    data,
    setPlanets,
  } = useContext(StarWarsContext);

  const addFilters = () => {
    let array = [];

    if (compare === 'maior que') {
      array = [...data.filter((item) => Number(item[type]) > Number(number))];
      setPlanets([...array]);
    }

    if (compare === 'menor que') {
      array = [...data.filter((item) => Number(item[type]) < Number(number))];
      setPlanets([...array]);
    }

    if (compare === 'igual a') {
      array = [...data.filter((item) => Number(item[type]) === Number(number))];
      setPlanets([...array]);
    }

    setTypeFilters([...typeFilters, type]);

    setFilterParameters(filterParameters.filter((item) => item !== type));

    setFilters({
      filters: {
        filterByName: {
          name: '',
        },
        filterByNumericValues: [
          ...filterByNumericValues,
          {
            column: type,
            comparison: compare,
            value: number,
          },
        ],
      },
    });
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        value={ type }
        onChange={ (e) => setType(e.target.value) }
      >
        {filterParameters
          .map((item) => <option key={ item } value={ item }>{item}</option>)}
      </select>
      <select
        data-testid="comparison-filter"
        value={ compare }
        onChange={ (e) => setCompare(e.target.value) }
      >
        <option selected value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        value={ number }
        onChange={ (e) => setNumber(e.target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => addFilters() }
      >
        Adicionar
      </button>
    </div>
  );
}

export default FilterNumeric;
