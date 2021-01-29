import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import StarWarsAPI from '../services/StarWarsAPI';

const StarWarsProvider = ({ children }) => {
  const [backupPlanets, setBackupPlanets] = useState([]);
  const [data, setData] = useState([]);
  const [comparators, setComparators] = useState([
    'maior que',
    'menor que',
    'igual a',
  ]);
  const [columns, setColumns] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
  });
  const [inputValues, setInputValues] = useState({
    column: '',
    comparison: '',
    value: 0,
  });

  const fetchData = async () => {
    const getPlanets = await StarWarsAPI();
    setData(getPlanets);
    setBackupPlanets(getPlanets);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const setValues = (name, value) => {
    console.log(name, value);
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleClick = () => {
    const { filterByNumericValues } = filters;
    setFilters({
      ...filters,
      filterByNumericValues: [...filterByNumericValues, inputValues],
    });

    let filterComparison = data;
    const { column, comparison, value } = inputValues;

    switch (comparison) {
    case 'maior que':
      filterComparison = [
        ...data.filter((planet) => +planet[column] > +value),
      ];
      setData([...filterComparison]);
      break;
    case 'menor que':
      filterComparison = [
        ...data.filter((planet) => +planet[column] < +value),
      ];
      setData([...filterComparison]);
      break;
    case 'igual a':
      filterComparison = [
        ...data.filter((planet) => +planet[column] === +value),
      ];
      setData([...filterComparison]);
      break;
    default:
      return filterComparison;
    }

    const newArray = [...columns.filter((option) => option !== column)];
    setColumns(newArray);
  };

  const context = {
    fetchData,
    data,
    filters,
    setFilters,
    setInputValues,
    inputValues,
    handleClick,
    setValues,
    backupPlanets,
    columns,
    comparators,
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
