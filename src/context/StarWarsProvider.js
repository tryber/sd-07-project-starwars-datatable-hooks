import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import { getPlanets } from '../services/starwarsAPI';

const StarWarsProvider = ({ children }) => {
  const [data, setDataPlanets] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterColumn, setColumn] = useState('');
  const [filterComparison, setComparison] = useState('');
  const [filterValue, setValue] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [filtersArray, setFiltersArray] = useState([]);

  useEffect(() => {
    async function fetchPlanets() {
      const { results } = await getPlanets();
      const dataPlanets = results;
      setDataPlanets(dataPlanets);
      setFilteredData(dataPlanets);
    }
    fetchPlanets();
  }, []);

  const handleFilterByName = (input) => {
    const { value } = input.target;
    setFilterName(value);
  };

  const handleInputColumn = (input) => {
    const { value } = input.target;
    setColumn(value);
  };

  const handleInputComparison = (input) => {
    const { value } = input.target;
    setComparison(value);
  };

  const handleInputValue = (input) => {
    const { value } = input.target;
    setValue(value);
  };

  const filterPlanets = (column, comparison, value) => {
    switch (comparison) {
    case 'maior que':
      setFilteredData(filteredData
        .filter((planet) => (
          parseFloat(planet[column]) > parseFloat(value))));
      break;
    case 'menor que':
      setFilteredData(filteredData
        .filter((planet) => (
          parseFloat(planet[column]) < parseFloat(value))));
      break;
    case 'igual a':
      setFilteredData(filteredData
        .filter((planet) => (
          parseFloat(planet[column]) === parseFloat(value))));
      break;
    default:
      setFilteredData(filteredData);
    }
  };

  const options = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const [optionsFiltered, setOptionsColumn] = useState(options);
  const filterDataButton = () => {
    if (filterColumn !== '' && filterComparison !== '' && filterValue !== '') {
      setFiltersArray([...filtersArray, {
        column: filterColumn,
        comparison: filterComparison,
        value: filterValue,
      }]);
      setOptionsColumn(optionsFiltered.filter((option) => option !== filterColumn));
    } else setFilteredData(filteredData);
  };

  useEffect(() => {
    console.log(filtersArray);
    filtersArray
      .forEach((filter) => filterPlanets(filter.column, filter.comparison, filter.value));
  }, [filtersArray]);

  const deleteFilter = (event) => {
    const { value } = event.target;
    const removedFilter = filtersArray.filter((filter) => (filter.column !== value));
    setFiltersArray(removedFilter);
    setFilteredData(data);
    setOptionsColumn([...optionsFiltered, value]);
  };

  const context = {
    data,
    filteredData,
    filters: {
      filterByName: {
        name: filterName,
      },
      filterByNumericValues: filtersArray,
    },
    handleFilterByName,
    handleInputColumn,
    handleInputComparison,
    handleInputValue,
    setFilteredData,
    filterDataButton,
    deleteFilter,
    optionsFiltered,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
};

export default StarWarsProvider;

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
