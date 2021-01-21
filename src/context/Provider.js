import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchPlanets from '../services/fetchPlanetsAPI';

function Provider(props) {
  const [data, setData] = useState([{ teste: 'só testando' }]);
  const [textInputValue, setTextInputValue] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
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

  const context = {
    data,
    filters,
    textInputValue,
    filteredData,
    handleTextChange,
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
