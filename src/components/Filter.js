import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import fetchApi from '../services/starWarsApi';

function Filter() {
  const [filterNumber, setFilterNumber] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

  const {
    filters,
    handleChangeName,
    dataSave,
    setFilters,
    setData,
    setDataSave,
  } = useContext(StarWarsContext);

  const onClick = () => {
    console.log(filterNumber);
    if (filterNumber.column && filterNumber.comparison && filterNumber.value) {
      console.log(filterNumber);
      setFilters(
        { ...filters,
          filterByNumericValues:
        [...filters.filterByNumericValues, filterNumber],
        },
      );
    }
  };

  const handleChange = ({ target: { value } }, key) => {
    setFilterNumber((state) => ({ ...state, [key]: value }));
  };

  useEffect(() => {
    async function fetchData() {
      const results = await fetchApi();
      setDataSave(results);
    }
    fetchData();
  }, [setDataSave]);

  useEffect(() => {
    if (filters.filterByNumericValues.length >= 1) {
      const counter = filters.filterByNumericValues.length - 1;
      const { column, comparison, value } = filters.filterByNumericValues[counter];
      console.log(column, comparison, value);
      if (comparison === 'menor que') {
        console.log();
        setData(dataSave
          .filter((item) => Number(item[column]) < Number(value)));
      } else if (comparison === 'maior que') {
        setData(dataSave
          .filter((item) => Number(item[column]) > Number(value)));
      } else if (comparison === 'igual a') {
        setData(dataSave
          .filter((item) => Number(item[column]) === Number(value)));
      }
    }
  }, [setData, filters.filterByNumericValues, dataSave]);

  return (
    <div>
      <input
        id="name-filter"
        type="text"
        data-testid="name-filter"
        onChange={ handleChangeName }
        name="name-filter"
      />
      <select
        data-testid="column-filter"
        name="column-filter"
        onChange={ (event) => handleChange(event, 'column') }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison-filter"
        onChange={ (event) => handleChange(event, 'comparison') }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ (event) => handleChange(event, 'value') }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => onClick() }
      >
        Adicionar Filtro
      </button>
    </div>
  );
}

export default Filter;
