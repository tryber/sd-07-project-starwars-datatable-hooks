import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';

function SelectComponent(props) {
  const {
    filters,
    setFilters,
    filter,
    setFilter,
    setData, revertFilter,
    setDataUrl } = useContext(
    StarWarsContext,
  );
  const { setObjectFilter, selectFilter, updateListFunc, object } = props;
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
      {filter.filters.filterByNumericValues.map(({ column }) => (
        <div data-testid="filter" key={ column }>
          <p>{`Filtro ${column}`}</p>
          <button
            onClick={ () => {
              const max = 2;
              if (Object.keys(revertFilter).length >= max) setDataUrl();
              else {
                setData({ results: (Object.entries(revertFilter))
                  .find((entries) => entries[0] === column)[1] });
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
