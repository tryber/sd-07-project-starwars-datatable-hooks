import React, { useState, useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import '../css/Form.css';

function FilterTable() {
  const { filters, setFilters, filters: { filterByNumericValues }, } = useContext(StarWarsContext);
  const [name, setName] = useState('');
  const [optionsNumeric, setOptionsNumeric] = useState([]);
  const [optionsComparison, setOptionsComparison] = useState([]);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('100000');

  const filterOptions = () => {
    let optionsNumeric = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
  
    let optionsComparison = [
      'maior que',
      'menor que',
      'igual a',
    ];

    if (filterByNumericValues.length) {
      filterByNumericValues.forEach(({ column, comparison }) => {
        optionsNumeric = optionsNumeric.filter((option) => option !== column);
        optionsComparison = optionsComparison.filter((option) => option !== comparison);
      });
    }

    setOptionsNumeric(optionsNumeric);
    setOptionsComparison(optionsComparison);
    setColumn(optionsNumeric[0]);
    setComparison(optionsComparison[0]);
  }

  useEffect(filterOptions, [filterByNumericValues]);

  const saveName = ({ target }) => {
    const { value } = target;
    setName(value);
  }

  const saveColumn = ({ target }) => {
    const { value } = target;
    setColumn(value);
  }

  const saveComparison = ({ target }) => {
    const { value } = target;
    setComparison(value);
  }

  const saveValue = ({ target }) => {
    const { value } = target;
    setValue(value);
  }

  const updateFilterName = () => {
    const newFilter = { ...filters, filterByName: { name } }
    setFilters(newFilter);
}

  useEffect(updateFilterName, [name]);

  const sendNewInformations = () => {
    const newFilter = {
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        { column, comparison, value}
      ],
    };
    setFilters(newFilter);
  }
  
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
              onChange={ saveName }
              data-testid="name-filter"
            />
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="numeric" >
            NUMERIC VALUES
            <select
              name="numeric"
              id="numeric"
              data-testid="column-filter"
              value={ column }
              onChange={ saveColumn }
            >
              { optionsNumeric.map((option) => <option key={option} >{ option }</option> ) }
            </select>
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="comparison" >
            COMPARISON VALUES
            <select
              name="comparison"
              id="comparison"
              data-testid="comparison-filter"
              value={ comparison }
              onChange={ saveComparison }
            >
              { optionsComparison.map((option) => <option key={option} >{ option }</option> ) }
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
              onChange={ saveValue }
              data-testid="value-filter"
            />
          </label>
        </div>
      </fieldset>
      <fieldset>
        <legend>Filters</legend>
        <div>
          {
            filterByNumericValues.map(({ column, comparison, value }) => 
            <div className="filter-container-div" data-testid='filter'>
              <p>{`${column} | ${comparison} | ${value}`}</p>
              <button type="button">X</button>
            </div>)
          }
        </div>
      </fieldset>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ sendNewInformations }
      >
        FILTER
      </button>
    </form>
  );
}

export default FilterTable;
