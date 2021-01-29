import React, { useEffect, useState } from 'react';
import PropsTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getWords from '../Service';

const StartWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      const result = await getWords();
      await setData(result);
    };
    getApi();
  }, []);

  const filterPlanet = (value) => {
    console.log(value);
    console.log(filter);
    if (value === '') {
      setFilter(data);
    }
    const isWords = data.filter((acc) => acc.name.includes(value));
    setFilter(isWords);
  };

  const context = {
    data,
    setData,
    filter,
    setFilter,
    filterPlanet,
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
