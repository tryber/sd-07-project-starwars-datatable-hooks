import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterByNumber() {
  const {
    data,
    setColumnFilter,
    setComparisonFilter,
    setValueFilter,
    setFilterData,
    columnFilter,
    comparisonFilter,
    valueFilter } = useContext(StarWarsContext);

  const columns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];

  const valueRange = [
    'maior que',
    'menor que',
    'igual a'];

  const handleClick = () => {
    if (comparisonFilter === 'maior que') {
      const filtro = data
        .filter((planet) => Number(planet[columnFilter]) > Number(valueFilter));
      setFilterData(filtro);
    }
    if (comparisonFilter === 'menor que') {
      const filtro = data
        .filter((planet) => Number(planet[columnFilter]) < Number(valueFilter));
      setFilterData(filtro);
    }
    if (comparisonFilter === 'igual a') {
      const filtro = data
        .filter((planet) => Number(planet[columnFilter]) === Number(valueFilter));
      setFilterData(filtro);
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'setColumnFilter') {
      setColumnFilter(value);
    }
    if (name === 'setComparisonFilter') {
      setComparisonFilter(value);
    }
    if (name === 'setValueFilter') {
      setValueFilter(value);
    }
  };

  return (
    <div>
      <select
        className="form-select"
        name="setColumnFilter"
        onChange={ handleChange }
        data-testid="column-filter"
      >
        <option selected>Selecione a coluna</option>
        { columns.map((item) => (<option value={ item } key={ item }>{ item }</option>)) }
      </select>
      <select
        className="form-select"
        name="setComparisonFilter"
        onChange={ handleChange }
        data-testid="comparison-filter"
      >
        <option selected>Faixa de valor</option>
        { valueRange.map((item) => (
          <option value={ item } key={ item }>{ item }</option>))}
      </select>
      <input
        type="number"
        name="setValueFilter"
        onChange={ handleChange }
        data-testid="value-filter"
      />
      <button
        type="button"
        onClick={ handleClick }
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </div>
  );
}

export default FilterByNumber;
