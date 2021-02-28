import React, { useContext, useState } from 'react';
import Context from '../context/Context';
import { length, population, columns } from '../service/helpers';

function Selected() {
  const { setSerach, Serach } = useContext(Context);
  const [about, setAbout] = useState('population');
  const [lengthType, setLengthType] = useState('maior que');
  const [value, setValue] = useState('');

  function setByValue(filter) {
    setSerach((SerachParam) => (
      {
        ...SerachParam,
        filters: { ...SerachParam.filters,
          filterByNumericValues:
           [...SerachParam.filters.filterByNumericValues, filter] },
      }
    ));
  }

  const setDropDown = () => {
    let arrpopulation = population;

    const dropDownArray = Serach.filters.filterByNumericValues
      .map((elementDropDown) => Object.values(elementDropDown)[0]);

    arrpopulation = arrpopulation
      .filter((elementAbout) => !dropDownArray.includes(elementAbout));
    return arrpopulation;
  };

  function eraseFilter(index) {
    const arrayOfFilters = [...Serach.filters.filterByNumericValues];
    arrayOfFilters.splice(index, 1);
    setSerach((SerachParam) => (
      {
        ...SerachParam,
        filters: { ...SerachParam.filters,
          filterByNumericValues: arrayOfFilters },
      }
    ));
  }
  const [radio, setRadio] = useState('ASC');
  const [columnRadio, setColumnRadio] = useState('Name');
  function handleSort() {
    setSerach((SerachParam) => (
      {
        ...SerachParam,
        filters: { ...SerachParam.filters,
          order: {
            column: columnRadio,
            sort: radio,
          } },
      }
    ));
  }

  return (
    <div>
      <br />
      <select
        data-testid="column-filter"
        onChange={ (event) => setAbout(event.target.value) }
      >
        {setDropDown().map((elem, index) => (
          <option
            key={ index }
            value={ elem }
          >
            { elem }
          </option>))}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ (event) => setLengthType(event.target.value) }
      >
        {length.map((elem, index) => (
          <option
            key={ index }
            value={ elem }
          >
            { elem }
          </option>))}
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ (event) => setValue(event.target.value) }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => {
          if (value === '' || about === '') return;
          setByValue({ column: about, comparison: lengthType, value });
          setAbout(setDropDown()[1]);
        } }
      >
        Filter
      </button>
      <div>
        { Serach.filters.filterByNumericValues.map((elem, index) => (
          <div key={ index } data-testid="filter">
            <button
              type="button"
              onClick={ () => eraseFilter(index) }
            >
              X
            </button>
            { `${elem.column} ${elem.comparison} ${elem.value}` }
          </div>
        )) }
      </div>
      <select
        data-testid="column-sort"
        onChange={ (event) => setColumnRadio(event.target.value) }
      >
        {columns.map((elem, index) => (
          <option
            key={ index }
            value={ elem }
          >
            { elem }
          </option>))}
      </select>
      <label htmlFor="asc">
        <input
          id="asc"
          type="radio"
          name="sort-radio"
          data-testid="column-sort-input-asc"
          value="ASC"
          onClick={ () => setRadio('ASC') }
        />
        Crescent
      </label>
      <label htmlFor="desc">
        <input
          id="desc"
          type="radio"
          name="sort-radio"
          data-testid="column-sort-input-desc"
          value="DESC"
          onClick={ () => setRadio('DESC') }
        />
        Decrescent
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ handleSort }
      >
        Sort by
      </button>
    </div>
  );
}

export default Selected;
