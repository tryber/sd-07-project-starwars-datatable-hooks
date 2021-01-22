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
  // const [filterObject, setFilterObject] = useState({});
  const [filtersArray, setFiltersArray] = useState([]);

  useEffect(() => {
    async function fetchPlanets() {
      const { results } = await getPlanets();
      const dataPlanets = results;
      setDataPlanets(dataPlanets);
      setFilteredData(dataPlanets);
    }
    fetchPlanets();
  });

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

  const filterDataButton = () => {
    if (filterColumn !== '' && filterComparison !== '' && filterValue !== '') {
      // console.log(filterColumn);
      // setFilterObject({
      //   column: filterColumn,
      //   comparison: filterComparison,
      //   value: filterValue,
      // });
      // console.log(filterObject);
      // add o obj ao array de filtros
      setFiltersArray([...filtersArray, {
        column: filterColumn,
        comparison: filterComparison,
        value: filterValue,
      }]);
      // console.log(filtersArray);
      switch (filterComparison) {
      case 'maior que':
        setFilteredData(data
          .filter((planet) => (
            parseFloat(planet[filterColumn]) > parseFloat(filterValue))));
        break;
      case 'menor que':
        setFilteredData(data
          .filter((planet) => (
            parseFloat(planet[filterColumn]) < parseFloat(filterValue))));
        break;
      case 'igual a':
        setFilteredData(data
          .filter((planet) => (
            parseFloat(planet[filterColumn]) === parseFloat(filterValue))));
        break;
      default:
        setFilteredData(data);
      }
    } else setFilteredData(data);
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
    },
    handleFilterByName,
    handleInputColumn,
    handleInputComparison,
    handleInputValue,
    setFilteredData,
    filterDataButton,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
};

export default StarWarsProvider;

StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
