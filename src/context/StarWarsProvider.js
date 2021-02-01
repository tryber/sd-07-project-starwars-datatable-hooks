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
  const [filteredData, setFilteredData] = useState([]);
  const [filtersArray, setFiltersArray] = useState([]);
  const [dataFilteredByName, setDataFilteredByName] = useState([]);

  useEffect(() => {
    async function fetchPlanets() {
      const { results } = await getPlanets();
      const dataPlanets = results;
      setDataPlanets(dataPlanets);
      setFilteredData(dataPlanets);
      setDataFilteredByName(dataPlanets);
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

  useEffect(() => {
    setDataFilteredByName(data.filter((planet) => (
      planet.name.toLowerCase().includes(filterName.toLowerCase()))))
  }, [filterName, data]);

  const filterDataButton = () => {
    if (filterColumn !== '' && filterComparison !== '' && filterValue !== '') {
      setFiltersArray([...filtersArray, {
        column: filterColumn,
        comparison: filterComparison,
        value: filterValue,
      }]);
      switch (filterComparison) {
      case 'maior que':
        setFilteredData(dataFilteredByName
          .filter((planet) => (
            parseFloat(planet[filterColumn]) > parseFloat(filterValue))));
        break;
      case 'menor que':
        setFilteredData(dataFilteredByName
          .filter((planet) => (
            parseFloat(planet[filterColumn]) < parseFloat(filterValue))));
        break;
      case 'igual a':
        setFilteredData(dataFilteredByName
          .filter((planet) => (
            parseFloat(planet[filterColumn]) === parseFloat(filterValue))));
        break;
      default:
        setFilteredData(dataFilteredByName);
      }
    } else setFilteredData(dataFilteredByName);
  };

  const deleteFilter = (event) => {
    const { value } = event.target;
    const removedFilter = filtersArray.filter((filter) => (filter.column !== value));
    setFiltersArray(removedFilter);
    // voltar o estado anterior
    setFilteredData(data);
  };

  const context = {
    data,
    filteredData,
    filters: {
      filterByName: {
        name: filterName,
      },
      // filterByNumericValues: [
      //   {
      //     column: filterColumn,
      //     comparison: filterComparison,
      //     value: filterValue,
      //   },
      // ],
      filterByNumericValues: filtersArray,
      dataFilteredByName,
    },
    handleFilterByName,
    handleInputColumn,
    handleInputComparison,
    handleInputValue,
    setFilteredData,
    filterDataButton,
    deleteFilter,
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
