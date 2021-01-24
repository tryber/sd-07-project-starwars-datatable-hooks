import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import context from '../../context';

const Filter = ({ index, arrayColumns }) => {
  const { filters, changeFiltersNumerics } = useContext(context);
  const { filterByNumericValues } = filters;

  const columnsInsered = filterByNumericValues.map((filter) => filter.column);
  const arraySelectColumns = arrayColumns.filter((item) => (
    !columnsInsered.includes(item)
  ));

  const [columnsSelect] = useState(arraySelectColumns);

  const initialFilters = {
    column: arraySelectColumns[0], // columnsSelect[0],
    comparison: 'maior que',
    value: '0',
  };
  const [filter, setFilterForms] = useState(initialFilters);
  const { column, comparison, value } = filter;
  const filterForms = (key, val) => {
    setFilterForms({ ...filter, [key]: val });
  };

  const handleClick = () => {
    // const indexForAddFilter = -1;
    // changeFiltersNumerics(indexForAddFilter, { column, comparison, value });
    changeFiltersNumerics(index, { column, comparison, value });
  };

  return (
    <div>
      <label htmlFor="planetInformation">
        <select
          id="planetInformation"
          data-testid="column-filter"
          value={ column }
          onChange={ (event) => filterForms('column', event.target.value) }
        >
          {
            columnsSelect.map((element) => (
              <option key={ element } value={ element }>{element}</option>
            ))
          }
        </select>
      </label>
      <label htmlFor="relationalOperator">
        <select
          id="relationalOperator"
          data-testid="comparison-filter"
          value={ comparison }
          onChange={ (event) => filterForms('comparison', event.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>

      <label htmlFor="valueFilter">
        <input
          type="number"
          id="valueFilter"
          data-testid="value-filter"
          value={ value }
          onChange={ (event) => filterForms('value', event.target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
        onKeyPress={ handleClick }
      >
        Aplicar
      </button>
    </div>
  );
};

Filter.propTypes = {
  arrayColumns: PropTypes.arrayOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
};

export default Filter;
