import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getPlanetsList from '../services/callAPI';

function Provider({ children }) {
  const zero = 0;
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState({});
  const [headers, setHeaders] = useState([]);
  const [searchBarValue, setSearchBarValue] = useState('');
  const [tBodyList, setTBodyList] = useState([]);
  const [clickFilter, setClickFilter] = useState(false);
  const [columnValue, setColumnValue] = useState('population');
  const [arithmeticLogic, setArithmeticLogic] = useState('maior que');
  const [numberValue, setNumberValue] = useState(zero);
  const [clickRemoveFilter, setClickRemoveFilter] = useState(false);

  useEffect(() => {
    const callAPI = async () => {
      setIsFetching(true);
      const planetsList = await getPlanetsList();
      setData(planetsList);
      setIsFetching(false);
      setTBodyList(planetsList.results);
    };
    callAPI();
  }, []);

  useEffect(() => {
    if (data.results) {
      const { results } = data;
      const currentList = results.filter(({ name }) => name.includes(searchBarValue));
      setTBodyList(currentList);
    }
  }, [searchBarValue]);

  useEffect(() => {
    if (data.results) {
      if (arithmeticLogic === 'maior que') {
        setTBodyList(tBodyList
          .filter((currentObject) => (
            Number(currentObject[columnValue]) > Number(numberValue)
          )));
      }

      if (arithmeticLogic === 'menor que') {
        setTBodyList(tBodyList
          .filter((currentObject) => (
            Number(currentObject[columnValue]) < Number(numberValue)
          )));
      }

      if (arithmeticLogic === 'igual a') {
        setTBodyList(tBodyList
          .filter((currentObject) => (
            Number(currentObject[columnValue]) === Number(numberValue)
          )));
      }
      setClickFilter(false);
    }
  }, [clickFilter]);

  useEffect(() => {
    setTBodyList(data.results);
    setClickRemoveFilter(false);
  }, [clickRemoveFilter]);

  const contextValue = {
    isFetching,
    data,
    searchBarValue,
    setSearchBarValue,
    tBodyList,
    setClickFilter,
    setColumnValue,
    columnValue,
    setArithmeticLogic,
    arithmeticLogic,
    setNumberValue,
    numberValue,
    setHeaders,
    headers,
    setClickRemoveFilter,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

// https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children

Provider.propTypes = { children: PropTypes.node.isRequired };

export default Provider;
