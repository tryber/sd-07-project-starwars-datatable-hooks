import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState(false);
  const [nameFilter, setNameFilter] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const zero = 0;
  const minusOne = -1;
  const [filterToApply, setFilter] = useState({
    columnType: '',
    compareType: 'maior que',
    numberFilter: zero,
    possibleFilters: [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ],
  });
  const [appliedFilters, setAppliedFilters] = useState([]);
  const [availableFilters, setAvailableFilters] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [columnSort, setColumnSort] = useState('population');
  const [sorting, setSorting] = useState('ASC');

  const applyNameFilter = (str) => {
    const results = [];
    data.forEach((planet) => {
      if (planet.name.includes(str)) {
        results.push(planet);
      }
    });
    setFilteredResults(results);
    if (str === '') setFiltered(false);
    else setFiltered(true);
    setNameFilter(str);
  };

  const applyNumberFilter = (column, compare, value, trigger, filtersOverride = 'as') => {
    let filters = { ...filterToApply };
    let doneFilters = [];
    if (filtersOverride === 'as') doneFilters = [...appliedFilters];
    else doneFilters = [...filtersOverride];
    const avFilters = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    const temp = { ...filterToApply };
    if (!('columnType' in filters)) filters = [temp];
    if (column !== '') temp.columnType = column;
    if (temp.columnType === 'None') temp.columnType = '';
    if (compare !== '') temp.compareType = compare;
    if (temp.compareType === 'None') temp.compareType = '';
    if (value !== zero) temp.numberFilter = value;

    if (trigger === 'change') filters = temp;

    if (trigger === 'add') {
      if (filters.columnType !== ''
      && filters.compareType !== '') {
        doneFilters.push(filters);
      }

      doneFilters.forEach((filter) => {
        const tempIndex = avFilters.findIndex((a) => a === filter.columnType);
        if (tempIndex > minusOne) avFilters.splice(tempIndex, 1);
      });

      let results = data;
      doneFilters.forEach((filter) => {
        if (filter.columnType !== '' && filter.compareType !== '') {
          const filteredWithNumbers = [];
          results.forEach((planet) => {
            if (filter.compareType === 'maior que') {
              if (filter.numberFilter < parseInt(planet[filter.columnType], 10)) {
                filteredWithNumbers.push(planet);
              }
            }
            if (filter.compareType === 'menor que') {
              if (filter.numberFilter > parseInt(planet[filter.columnType], 10)) {
                filteredWithNumbers.push(planet);
              }
            }
            if (filter.compareType === 'igual a') {
              if (filter.numberFilter === planet[filter.columnType]) {
                filteredWithNumbers.push(planet);
              }
            }
          });
          results = filteredWithNumbers;
        }
      });

      if (doneFilters.length === zero) setFiltered(false);
      else if (doneFilters.length > zero) setFiltered(true);

      setFilteredResults(results);
    }

    if (trigger === 'remove') {
      doneFilters.forEach((filter) => {
        const tempIndex = avFilters.findIndex((a) => a === filter.columnType);
        if (tempIndex > minusOne) avFilters.splice(tempIndex, 1);
        console.log(tempIndex);
      });

      let results = data;
      doneFilters.forEach((filter) => {
        if (filter.columnType !== '' && filter.compareType !== '') {
          const filteredWithNumbers = [];
          results.forEach((planet) => {
            if (filter.compareType === 'maior que') {
              if (filter.numberFilter < parseInt(planet[filter.columnType], 10)) {
                filteredWithNumbers.push(planet);
              }
            }
            if (filter.compareType === 'menor que') {
              if (filter.numberFilter > parseInt(planet[filter.columnType], 10)) {
                filteredWithNumbers.push(planet);
              }
            }
            if (filter.compareType === 'igual a') {
              if (filter.numberFilter === planet[filter.columnType]) {
                filteredWithNumbers.push(planet);
              }
            }
          });
          results = filteredWithNumbers;
        }
      });

      console.log(avFilters);

      if (doneFilters.length === zero) setFiltered(false);
      else if (doneFilters.length > zero) setFiltered(true);

      setFilteredResults(results);
    }

    setAvailableFilters(avFilters);
    setAppliedFilters(doneFilters);
    setFilter(filters);
  };

  const removeFilter = ({ target }) => {
    const tempArr = [...appliedFilters];
    const tempIndex = appliedFilters.findIndex((a) => a.columnType === target.name);
    if (tempIndex > minusOne) tempArr.splice(tempIndex, 1);
    applyNumberFilter('', '', zero, 'remove', tempArr);
  };

  const sortPlanets = () => {
    let tempArr = [...data];
    if (columnSort !== '' && sorting !== '') {
      if (sorting === 'ASC') {
        tempArr.sort((a, b) => parseInt(a[columnSort], 10) - parseInt(b[columnSort], 10));
      }
      if (sorting === 'DSC') {
        tempArr.sort((a, b) => parseInt(b[columnSort], 10) - parseInt(a[columnSort], 10));
      }
    }

    setData(tempArr);

    tempArr = filteredResults;

    if (columnSort !== '' && sorting !== '') {
      if (sorting === 'ASC') {
        tempArr.sort((a, b) => parseInt(a[columnSort], 10) - parseInt(b[columnSort], 10));
      }
      if (sorting === 'DSC') {
        tempArr.sort((a, b) => parseInt(b[columnSort], 10) - parseInt(a[columnSort], 10));
      }
    }

    setFilteredResults(tempArr);
  };

  const contextValue = {
    data,
    setData,
    filtered,
    nameFilter,
    applyNameFilter,
    filteredResults,
    applyNumberFilter,
    filterToApply,
    appliedFilters,
    removeFilter,
    availableFilters,
    columnSort,
    setColumnSort,
    setSorting,
    sortPlanets,
  };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf().isRequired,
};

export default Provider;
