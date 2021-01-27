import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import fetchApi from '../services/starWarsApi';

function Filter() {
  const {
    filters,
    handleChangeName,
    setFilters,
    setData,
    setDataSave,
  } = useContext(StarWarsContext);

  useEffect(() => {
    async function fetchData() {
      const results = await fetchApi();
      setData(results);
      setDataSave(results);
    }
    fetchData();
  }, [setData, setDataSave]);

  const filterNumber = {
    column: '',
    comparison: '',
    value: '',
  };

  const onClick = () => {
    setFilters(
      { ...filters,
        filterByNumericValues:
        [...filters.filterByNumericValues, filterNumber],
      },
    );
  };

  const handleChange = ({ target: { value } }, key) => {
    filterNumber[key] = value;
  };

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
        onClick={ (event) => handleChange(event, 'column') }
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
        <option value="igual">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ (event) => handleChange(event, 'value') }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => onClick(filterNumber) }
      >
        Adicionar Filtro
      </button>
    </div>
  );
}

export default Filter;
