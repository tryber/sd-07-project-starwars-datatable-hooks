import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SecondFilter() {
  const five = 5;
  const zero = 0;
  const { filters,
    setTagCompare,
    setTag,
    setValueCompare,
    columns,
    tag,
    tagCompare,
    valueCompare,
    setfilters,
    setColomns,
    setDataFilter,
    dataFilter,
    filterCompare,
    data,

  } = useContext(StarWarsContext);

  const { filterByNumericValues, filterByName } = filters;

  const handlerChangeTagCompare = ({ target }) => {
    setTagCompare(target.value);
  };
    // columns.splice(columns.indexOf(target.value), 1);
  const handlerChangeTag = ({ target }) => {
    setTag(target.value);
  };

  const handlerChangeValue = ({ target }) => {
    setValueCompare(target.value);
  };

  const confirmFilter = () => {
    const filtersNow = {
      column: '',
      comparison: '',
      value: '',
    };
    setColomns([...columns, columns[columns.length - 1].filter((item) => item !== tag)]);
    const number = filterByNumericValues.length - 1;

    if (filterByNumericValues.length <= five) {
      if (filterByNumericValues.length === five) {
        filterByNumericValues[number].column = tag;
        filterByNumericValues[number].comparison = tagCompare;
        filterByNumericValues[number].value = valueCompare;
      } else {
        filterByNumericValues[number].column = tag;
        filterByNumericValues[number].comparison = tagCompare;
        filterByNumericValues[number].value = valueCompare;
        setfilters({ ...filterByName,
          filterByNumericValues: [...filterByNumericValues, filtersNow] });
      }
    }
    setDataFilter(filterCompare(tagCompare, dataFilter, tag, valueCompare));
  };

  const removeFilter = (index) => {
    filterByNumericValues.splice(index, 1);
    setDataFilter(data);
  };

  return (
    <div>
      {filterByNumericValues.map((_, index) => (
        <div key={ index }>
          <form data-testid="filter">
            <label htmlFor="select">
              Selecione:
              <select
                data-testid={ index === zero ? 'column-filter' : '' }
                onChange={ handlerChangeTag }
                id="select"
              >
                <option value="escolha">Escolha a tag</option>
                {columns[index].map((item) => (
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
                data-testid={ index === zero ? 'comparison-filter' : '' }
              >
                <option value="igual a">igual a</option>
                <option value="menor que">menor que</option>
                <option value="maior que">maior que</option>
              </select>
            </label>
            <label htmlFor="value-compare">
              Valor:
              <input
                data-testid={ index === zero ? 'value-filter' : '' }
                onChange={ handlerChangeValue }
                id="value-compare"
                type="number"
              />
            </label>

            <button onClick={ () => removeFilter(index) } type="button">X</button>
          </form>
          <button
            data-testid={ index === zero ? 'button-filter' : '' }
            onClick={ confirmFilter }
            type="button"
          >
            Filtrar
          </button>
        </div>
      ))}
    </div>
  );
}

export default SecondFilter;
