import React, { useEffect, useState } from 'react';
import PropsTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getWords from '../Service';

const StartWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const [filter, setFilter] = useState([]);

  const [filterColumn, setFilterColumn] = useState('');

  const [filterComparison, setFilterComparison] = useState('');

  const [filterValue, setFilterValue] = useState('');

  let filtered = '';

  const filterPlanet = (value) => {
    if (value === '') {
      setFilter(data);
    }
    const isWords = data.filter((acc) => acc.name.includes(value));
    setFilter(isWords);
  };

  const onFilter = () => {
    switch (filterComparison) {
    case 'maior que':
      filtered = data.filter((acc) => acc[filterColumn] > parseInt(filterValue, 10));
      setFilter(filtered);
      break;

    case 'menor que':
      filtered = data.filter((acc) => acc[filterColumn] < parseInt(filterValue, 10));
      setFilter(filtered);
      break;

    case 'igual a':
      filtered = data.filter((acc) => acc[filterColumn] === filterValue);
      setFilter(filtered);
      console.log(filterComparison);
      break;
    default:
      console.log('Deu ruim');
    }
  };

  useEffect(() => {
    const getApi = async () => {
      const result = await getWords();
      await setData(result);
    };
    getApi();
  }, []);

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
