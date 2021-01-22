import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SecondFilter() {
  const { filters,
    setTagCompareSecond,
    setTagSecond,
    setValueCompareSecond,
    columns,
  } = useContext(StarWarsContext);

  const { filterByNumericValues } = filters;
  const { column } = filterByNumericValues[0];

  const colonsfilter = columns.filter((item) => item !== column);

  const handlerChangeTagCompare = ({ target }) => {
    setTagCompareSecond(target.value);
  };

  const handlerChangeTag = ({ target }) => {
    setTagSecond(target.value);
    columns.splice(columns.indexOf(target.value), 1);
  };

  const handlerChangeValue = ({ target }) => {
    setValueCompareSecond(target.value);
  };
  return (
    <form>
      <label htmlFor="select">
        Selecione:
        <select onChange={ handlerChangeTag } id="select">
          {colonsfilter.map((item) => (
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
          id="value-compare"
          type="number"
        />
      </label>
      <button data-testid="filter" type="button">x</button>
    </form>

  );
}

export default SecondFilter;
