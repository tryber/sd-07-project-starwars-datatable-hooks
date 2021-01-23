import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchPlanets from '../services/fetchPlanetsAPI';

function Provider(props) {
  const initialNumber = 0;
  const [data, setData] = useState([{ teste: 'só testando' }]);
  const [textInputValue, setTextInputValue] = useState('');
  const [columnValue, setColumnValue] = useState('population');
  const [comparisonValue, setComparisonValue] = useState('maior que');
  const [numberValue, setNumberValue] = useState(initialNumber);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: columnValue,
        comparison: comparisonValue,
        value: numberValue,
      },
    ],
  });

  useEffect(() => {
    fetchPlanets().then((response) => setData(response.results));
  }, []);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const filterByName = (value) => {
    const arrayToFilter = [...data];
    const filteredArray = arrayToFilter.filter((item) => (
      item.name.toLowerCase().includes(value)
    ));
    setFilteredData(filteredArray);
  };

  const handleTextChange = (event) => {
    const { target } = event;
    const { value } = target;
    setTextInputValue(value);
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
    filterByName(value.toLowerCase());
  };

  const handleColumnChange = async (event) => {
    const { target } = event;
    const { value } = target;
    console.log(value);
    await setColumnValue(value);
    console.log(columnValue);
  };

  const handleComparisonChange = (event) => {
    const { target } = event;
    const { value } = target;
    setComparisonValue(value);
  };

  const handleNumberChange = (event) => {
    const { target } = event;
    const { value } = target;
    setNumberValue(value);
  };

  const filterByNumber = () => {
    const arrayToFilter = [...data];
    const { filterByNumericValues } = filters;
    const { column, comparison, value } = filterByNumericValues[0];
    let filteredArray = [];
    switch (comparison) {
    case 'maior que':
      filteredArray = arrayToFilter.filter(
        (item) => parseInt(item[column], 10) > parseInt(value, 10),
      );
      break;
    case 'menor que':
      filteredArray = arrayToFilter.filter(
        (item) => parseInt(item[column], 10) < parseInt(value, 10),
      );
      break;
    default:
      filteredArray = arrayToFilter.filter(
        (item) => parseInt(item[column], 10) === parseInt(value, 10),
      );
      break;
    }
    setFilteredData(filteredArray);
  };

  const handleFilterClick = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        {
          column: columnValue,
          comparison: comparisonValue,
          value: numberValue,
        }],
    });
    filterByNumber();
  };

  const handleResetClick = () => {
    const resetedArray = [...data];
    setColumnValue('population');
    setComparisonValue('maior que');
    setNumberValue(initialNumber);
    setFilteredData(resetedArray);
  };

  useEffect(() => {
    setFilters({
      filterByNumericValues: [
        {
          column: columnValue,
          comparison: comparisonValue,
          value: numberValue,
        }],
    });
  }, [columnValue, comparisonValue, numberValue]);

  const context = {
    data,
    filters,
    textInputValue,
    filteredData,
    columnValue,
    comparisonValue,
    numberValue,
    handleColumnChange,
    handleComparisonChange,
    handleNumberChange,
    handleFilterClick,
    handleTextChange,
    handleResetClick,
  };
  const { children } = props;
  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
