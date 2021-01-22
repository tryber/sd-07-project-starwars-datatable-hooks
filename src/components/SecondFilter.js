import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SecondFilter() {
  const { filters,
    setTagCompareSecond,
    setTagSecond,
    setValueCompareSecond,
    dataHeader,
  } = useContext(StarWarsContext);

  const { filterByNumericValues } = filters;

  const dataFilter = dataHeader.filter((item) => item === 'population'
        || item === 'orbital_period'
        || item === 'diameter'
        || item === 'rotation_period'
        || item === 'surface_water').filter((item2) => {
    const { column } = filterByNumericValues[0];
    return item2 !== column;
  });

  const handlerChangeTagCompare = ({ target }) => {
    setTagCompareSecond(target.value);
  };

  const handlerChangeTag = ({ target }) => {
    setTagSecond(target.value);
  };

  const handlerChangeValue = ({ target }) => {
    setValueCompareSecond(target.value);
  };
  return (
    <form>
      <label htmlFor="select">
        Selecione:
        <select onChange={ handlerChangeTag } id="select">
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

    </form>

  );
}

export default SecondFilter;
