import React, { useEffect, useState, useCallback } from 'react';
import PropsTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getWords from '../Service';

const StartWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const [filter, setFilter] = useState(data);

  const [filterColumn, setFilterColumn] = useState('');

  const [filterComparison, setFilterComparison] = useState('');

  const [filterValue, setFilterValue] = useState('');

  const [columnOption, setColumnOption] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const [appFilter, setAppFilter] = useState([]);

  const [order, setOrder] = useState({ column: 'Name', sort: 'ASC' });

  let dataOrderAs = '';
  const negative = -1;
  const positive = 1;
  const neutre = 0;

  const arrayOrder = useCallback(
    (array, column) => array.sort((a, b) => {
      if (
        column === 'population'
          || column === 'rotation_period'
          || column === 'orbital_period'
      ) {
        return a[column] - b[column];
      }
      if (a[column] < b[column]) {
        return negative;
      }
      if (a[column] > b[column]) {
        return positive;
      }
      return neutre;
    }),
    [negative],
  );

  const reverseOrder = useCallback(
    (array, column) => array.sort((a, b) => {
      if (
        column === 'population'
          || column === 'rotation_period'
          || column === 'orbital_period'
      ) {
        return b[column] - a[column];
      }
      if (a[column] > b[column]) {
        return negative;
      }
      if (a[column] < b[column]) {
        return positive;
      }
      return neutre;
    }),
    [negative],
  );

  const byOrder = ({ sort, column }) => {
    switch (sort) {
    case 'ASC':
      dataOrderAs = arrayOrder(data, column);
      setFilter(dataOrderAs);
      console.log(filter);
      break;
    case 'DESC':
      dataOrderAs = reverseOrder(data, column);
      setFilter(dataOrderAs);
      console.log(filter);
      break;
    default:
      console.log('Não deu');
    }
  };

  // console.log(filterValue);
  // console.log(filterColumn);
  // console.log(filterComparison);
  // console.log(columnOption);

  const filterColunSelect = (colum) => {
    const resultFilter = columnOption.filter((acc) => acc !== colum);
    setColumnOption(resultFilter);
  };

  const removeFilter = (target) => {
    const restoreOption = columnOption;
    restoreOption.push(appFilter[0].column);
    const removeAppFilter = appFilter.filter((acc) => acc.column !== target);
    setColumnOption(restoreOption);
    setAppFilter(removeAppFilter);
    setFilter(data);
  };

  let filtered = '';

  const filterPlanet = (value) => {
    if (value === '') {
      setFilter(data);
    }
    const isWords = data.filter((acc) => acc.name.includes(value));
    setFilter(isWords);
  };

  const insertFilter = (value, column, comparioson) => {
    const appFiltered = { value, column, comparioson };
    setAppFilter([...appFilter, appFiltered]);
  };

  const onFilter = () => {
    switch (filterComparison) {
    case 'maior que':
      filtered = data.filter(
        (acc) => acc[filterColumn] > parseInt(filterValue, 10),
      );
      setFilter(filtered);
      filterColunSelect(filterColumn);
      insertFilter(filterValue, filterColumn, filterComparison);
      break;

    case 'menor que':
      filtered = data.filter(
        (acc) => acc[filterColumn] < parseInt(filterValue, 10),
      );
      setFilter(filtered);
      filterColunSelect(filterColumn);
      insertFilter(filterValue, filterColumn, filterComparison);
      break;

    case 'igual a':
      filtered = data.filter((acc) => acc[filterColumn] === filterValue);
      setFilter(filtered);
      filterColunSelect(filterColumn);
      insertFilter(filterValue, filterColumn, filterComparison);
      break;
    default:
      console.log('Deu ruim');
    }
  };

  useEffect(() => {
    const getApi = async () => {
      const result = await getWords();
      await setData(arrayOrder(result, 'name'));
    };
    getApi();
  }, [arrayOrder]);

  const context = {
    data,
    setData,
    filter,
    setFilter,
    filterPlanet,
    onFilter,
    setFilterColumn,
    setFilterComparison,
    setFilterValue,
    filterColumn,
    filterComparison,
    filterValue,
    columnOption,
    appFilter,
    removeFilter,
    setOrder,
    byOrder,
    order,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
};

StartWarsProvider.propTypes = {
  children: PropsTypes.element.isRequired,
};

export default StartWarsProvider;
