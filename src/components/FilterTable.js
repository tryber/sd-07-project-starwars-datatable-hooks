import React, { useState, useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import '../css/Form.css';

function FilterTable() {
  const {
    keysPlanets,
    filters,
    setFilters,
    filters: { filterByNumericValues },
  } = useContext(StarWarsContext);
  const [name, setName] = useState('');
  const [optionsNumeric, setOptionsNumeric] = useState([]);
  const [optionsComparison, setOptionsComparison] = useState([]);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('100000');
  const [columnSort, setColumnSort] = useState('name');
  const [radioSort, setRadioSort] = useState('ASC');

  const filterOptions = () => {
    let optionsNumericDefault = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];

    let optionsComparisonDefault = ['maior que', 'menor que', 'igual a'];

    if (filterByNumericValues.length) {
      filterByNumericValues.forEach((filter) => {
        optionsNumericDefault = optionsNumericDefault.filter(
          (option) => option !== filter.column,
        );
        optionsComparisonDefault = optionsComparisonDefault.filter(
          (option) => option !== filter.comparison,
        );
      });
    }

    setOptionsNumeric(optionsNumericDefault);
    setOptionsComparison(optionsComparisonDefault);
    setColumn(optionsNumericDefault[0]);
    setComparison(optionsComparisonDefault[0]);
  };

  useEffect(filterOptions, [filterByNumericValues]);

  const saveValues = ({ target }, callback) => {
    callback(target.value);
  };

  const updateFilterName = () => {
    const newFilter = { ...filters, filterByName: { name } };
    setFilters(newFilter);
  };

  useEffect(updateFilterName, [name]);

  const sendNewInformations = () => {
    const newFilter = {
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        { column, comparison, value },
      ],
    };
    setFilters(newFilter);
  };

  const updateSortInformations = () => {
    const newSort = {
      ...filters,
      order: {
        column: columnSort,
        sort: radioSort,
      },
    };
    setFilters(newSort);
  };

  const removeFilter = (filterToRemove) => {
    // const { column, comparison, value } = filterToRemove;
    const removeFilterOptions = filterByNumericValues
      .filter((filter) => filterToRemove.column !== filter.column);
    // console.log(removeFilterOptions);

    const newFilter = {
      ...filters,
      filterByNumericValues: removeFilterOptions,
    };

    setFilters(newFilter);
  };

  return (
    <form className="form-container">
      <fieldset>
        <legend>FILTER INFORMATIONS</legend>
        <div className="input-container">
          <label htmlFor="name">
            NAME PLANET
            <input
              type="text"
              name="name"
              id="name"
              value={ name }
              onChange={ (e) => saveValues(e, setName) }
              data-testid="name-filter"
            />
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="numeric">
            NUMERIC VALUES
            <select
              name="numeric"
              id="numeric"
              data-testid="column-filter"
              value={ column }
              onChange={ (e) => saveValues(e, setColumn) }
            >
              {optionsNumeric.map((option) => (
                <option key={ option }>{option}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="comparison">
            COMPARISON VALUES
            <select
              name="comparison"
              id="comparison"
              data-testid="comparison-filter"
              value={ comparison }
              onChange={ (e) => saveValues(e, setComparison) }
            >
              {optionsComparison.map((option) => (
                <option key={ option }>{option}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="value">
            VALUE FILTER
            <input
              type="text"
              name="value"
              id="value"
              value={ value }
              onChange={ (e) => saveValues(e, setValue) }
              data-testid="value-filter"
            />
          </label>
        </div>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ sendNewInformations }
        >
          FILTER
        </button>
      </fieldset>
      <fieldset>
        <legend>SORT INFORMATIONS</legend>
        <div className="column-sort">
          <label htmlFor="column-sort">
            COLUMN SORT
            <select
              name="column-sort"
              id="column-sort"
              data-testid="column-sort"
              value={ columnSort }
              onChange={ (e) => saveValues(e, setColumnSort) }
            >
              {keysPlanets.map((option) => (
                <option key={ option }>{option}</option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="radioSortASC">
            ASC
            <input
              type="radio"
              name="radioSort"
              id="radioSortASC"
              data-testid="column-sort-input-asc"
              value="ASC"
              onClick={ (e) => saveValues(e, setRadioSort) }
              checked={ radioSort === 'ASC' }
            />
          </label>
          <label htmlFor="radioSortDESC">
            DESC
            <input
              type="radio"
              name="radioSort"
              id="radioSortDESC"
              data-testid="column-sort-input-desc"
              value="DESC"
              onClick={ (e) => saveValues(e, setRadioSort) }
              checked={ radioSort === 'DESC' }
            />
          </label>
        </div>
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ updateSortInformations }
        >
          SORT
        </button>
      </fieldset>
      <fieldset>
        <legend>Filters</legend>
        <div>
          {filterByNumericValues.map((filter) => (
            <div
              className="filter-container-div"
              key={ filter.column }
              data-testid="filter"
            >
              <p>{`${filter.column} | ${filter.comparison} | ${filter.value}`}</p>
              <button type="button" onClick={ () => removeFilter(filter) }>
                X
              </button>
            </div>
          ))}
        </div>
      </fieldset>
    </form>
  );
}

export default FilterTable;
