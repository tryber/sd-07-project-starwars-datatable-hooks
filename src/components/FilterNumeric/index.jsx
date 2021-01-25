import React, { useContext, useState } from 'react';

import StarWarsContext from '../../context/StarWarsContext';

function FilterNumeric() {
  const [type, setType] = useState('population');
  const [compare, setCompare] = useState('maior que');
  const [number, setNumber] = useState('0');
  const {
    setFilters,
    setFilterNumber,
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

    setFilters({
      filters: {
        filterByName: {
          name: '',
        },
        filterByNumericValues: [{
          column: type,
          comparison: compare,
          value: number,
        }],
      },
    });

    setFilterNumber(true);
    setType('population');
    setCompare('maior que');
    setNumber('0');
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        value={ type }
        onChange={ (e) => setType(e.target.value) }
      >
        <option selected value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
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
