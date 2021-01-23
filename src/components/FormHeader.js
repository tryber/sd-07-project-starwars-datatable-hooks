import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import SecondFilter from './SecondFilter';

function FormHeader() {
  const { setFilterByName,
    dataHeader,
    setTagCompare,
    setTag,
    setValueCompare,
    setFilter,
    filters,
  } = useContext(StarWarsContext);

  const { filterByNumericValues } = filters;
  const { column, comparison, value } = filterByNumericValues[0];
  const dataFilter = dataHeader.filter((item) => item === 'population'
    || item === 'orbital_period'
    || item === 'diameter'
    || item === 'rotation_period'
    || item === 'surface_water');
  const handlerChangeName = ({ target }) => {
    setFilterByName(target.value);
  };

  const handlerChangeTagCompare = ({ target }) => {
    setTagCompare(target.value);
  };

  const handlerChangeTag = ({ target }) => {
    setTag(target.value);
  };

  const handlerChangeValue = ({ target }) => {
    setValueCompare(target.value);
  };

  const filtered = () => {
    setFilter(true);
  };

  const noFiltered = () => {
    setFilter(false);
  };

  const checkPrimaryFilter = column !== '' && value !== '' && comparison !== '';

  return (
    <div>
      <form>
        <label htmlFor="name">
          Nome:
          <input
            id="name"
            data-testid="name-filter"
            type="text"
            onChange={ handlerChangeName }
          />
        </label>
      </form>
      <form data-testid="filter">
        <label htmlFor="select">
          Selecione:
          <select onChange={ handlerChangeTag } id="select" data-testid="column-filter">
            {dataFilter.map((item) => (
              <option
                key={ item }
                value={ item }
              >
                {item}
              </option>))}
          </select>
        </label>
        <label htmlFor="compare">
          Compare:
          <select
            onChange={ handlerChangeTagCompare }
            data-testid="comparison-filter"
            id="compare"
          >
            <option value="igual a">igual a</option>
            <option value="menor que">menor que</option>
            <option value="maior que">maior que</option>
          </select>
        </label>
        <label htmlFor="value-compare">
          Valor:
          <input
            onChange={ handlerChangeValue }
            data-testid="value-filter"
            id="value-compare"
            type="number"
          />
        </label>
        {checkPrimaryFilter ? <SecondFilter /> : ''}
        <button onClick={ noFiltered } type="button">X</button>
      </form>

      <button
        onClick={ filtered }
        data-testid="button-filter"
        type="button"
      >
        Filtrar
      </button>
    </div>

  );
}

export default FormHeader;
