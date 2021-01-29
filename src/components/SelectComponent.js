import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';

function SelectComponent(props) {
  const {
    data,
    setData,
    filters,
    setFilters,
    filter,
    setFilter,
    revertFilter,
    setDataUrl,
  } = useContext(StarWarsContext);
  const [sorted, setSorted] = useState({ order: { column: '', sort: '' } });
  const { setObjectFilter, selectFilter, updateListFunc, object } = props;

  const typeSort = ({ target }) => {
    setSorted({ ...sorted, order: { ...sorted.order, sort: target.value } });
  };
  const typeColumn = ({ target }) => {
    setSorted({ ...sorted, order: { ...sorted.order, column: target.value } });
  };

  const sortData = () => {
    if (sorted.order !== '' && sorted.column !== '') {
      return sorted.order.sort === 'ASC'
        ? setData({
          results: data.results.sort(
            (a, b) => a[sorted.order.column] - b[sorted.order.column],
          ),
        })
        : setData({
          results: data.results.sort(
            (a, b) => b[sorted.order.column] - a[sorted.order.column],
          ),
        });
    }
  };
  return (
    <div>
      <select
        name="column"
        onMouseLeave={ setObjectFilter }
        onChange={ setObjectFilter }
        data-testid="column-filter"
      >
        {filters.map((filt) => (
          <option key={ filt } value={ filt }>
            {filt}
          </option>
        ))}
      </select>
      <select
        name="comparison"
        onMouseLeave={ setObjectFilter }
        onChange={ setObjectFilter }
        data-testid="comparison-filter"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        name="value"
        onChange={ setObjectFilter }
        data-testid="value-filter"
        type="number"
      />
      <button
        onClick={ () => {
          selectFilter(object);
          updateListFunc(object);
          setFilters(filters.filter((element) => object.column !== element));
        } }
        type="button"
        data-testid="button-filter"
      >
        Adicionar filtro
      </button>
      <div>
        <select
          name="column"
          data-testid="column-sort"
          onMouseLeave={ typeColumn }
          onChange={ typeColumn }
        >
          {filters.map((filt) => (
            <option key={ filt } value={ filt }>
              {filt}
            </option>
          ))}
        </select>
        <label htmlFor="asc">
          <input
            onChange={ typeSort }
            data-testid=" column-sort-input-asc"
            name="sort"
            id="asc"
            type="radio"
            value="ASC"
          />
          ASC
        </label>
        <label htmlFor="desc">
          <input
            onChange={ typeSort }
            data-testid="column-sort-input-desc"
            name="sort"
            id="desc"
            type="radio"
            value="DESC"
          />
          DESC
        </label>
        <button
          onClick={ sortData }
          data-testid="column-sort-button"
          type="button"
        >
          Ordenar
        </button>
      </div>
      {filter.filters.filterByNumericValues.map(({ column }) => (
        <div data-testid="filter" key={ column }>
          <p>{`Filtro ${column}`}</p>
          <button
            onClick={ () => {
              const max = 2;
              if (Object.keys(revertFilter).length >= max) setDataUrl();
              else {
                setData({
                  results: Object.entries(revertFilter).find(
                    (entries) => entries[0] === column,
                  )[1],
                });
              }
              setFilters([...filters, column]);
              setFilter({
                filters: {
                  ...filter.filters,
                  filterByNumericValues: [
                    ...filter.filters.filterByNumericValues.filter(
                      (removeFilter) => column !== removeFilter.column,
                    ),
                  ],
                },
              });
            } }
            type="button"
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

SelectComponent.propTypes = {
  setObjectFilter: PropTypes.func.isRequired,
  selectFilter: PropTypes.func.isRequired,
  updateListFunc: PropTypes.func.isRequired,
  object: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default SelectComponent;
