import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const [filter, setFilter] = useState({
    filterByName: '',
    filterByNumericValues: [{}],
  });

  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const filterText = (parameter) => {
    setFilter({
      ...filter,
      filterByName: parameter,
    });
  };

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((json) => setData(json.results));
  }, []);

  const handleColumnChange = (parameter) => {
    setForm({
      ...form,
      column: parameter,
    });
  };

  const handleComparisonChange = (parameter) => {
    setForm({
      ...form,
      comparison: parameter,
    });
  };

  const handleValueChange = (parameter) => {
    setForm({
      ...form,
      value: parameter,
    });
  };

  const handleClick = () => {
    setFilter({
      ...filter,
      filterByNumericValues: [{
        column: form.column,
        comparison: form.comparison,
        value: form.value,
      }],
    });
    setForm({
      column: 'population',
      comparison: 'maior que',
      value: 0,
    });
  };

  const context = {
    data,
    filter,
    form,
    filterText,
    handleColumnChange,
    handleComparisonChange,
    handleValueChange,
    handleClick,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
};

export default StarWarsProvider;

StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
