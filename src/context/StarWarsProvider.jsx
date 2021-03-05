import propTypes from 'prop-types';
import React, { useState } from 'react';
import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {
      column: '',
      sort: '',
    },
  });
  const [filteredByName, setFilteredByName] = useState(false);
  const [filteredByNum, setFilteredByNum] = useState(false);
  const [sorted, setSorted] = useState(false);

  const context = {
    data,
    setData,
    searchText,
    setSearchText,
    filters,
    setFilters,
    filteredByName,
    setFilteredByName,
    filteredByNum,
    setFilteredByNum,
    sorted,
    setSorted,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>);
};

StarWarsProvider.propTypes = {
  children: propTypes.arrayOf(propTypes.object).isRequired,
};

export default StarWarsProvider;
