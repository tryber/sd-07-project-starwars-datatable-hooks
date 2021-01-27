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
  const [columnValue, setColumnValue] = useState('population');
  const [arithmeticLogic, setArithmeticLogic] = useState('maior que');
  const [numberValue, setNumberValue] = useState(zero);
  const [columnArray, setColumnArray] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [filtersArray, setFiltersArray] = useState([]);

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
      // Ygor - Provider Linha 82: https://github.com/tryber/sd-07-project-starwars-datatable-hooks/pull/39/files
      setTBodyList(data.results);
      filtersArray.forEach(({
        columnValue: currentColumnValue,
        arithmeticLogic: currentArithmeticLogic,
        numberValue: currentNumberValue,
      }) => {
        setTBodyList(data.results);
        if (currentArithmeticLogic === 'maior que') {
          setTBodyList(
            (previousTBodyList) => previousTBodyList.filter((currentObject) => (
              Number(currentObject[currentColumnValue]) > Number(currentNumberValue)
            )),
          );
        }

        if (currentArithmeticLogic === 'menor que') {
          setTBodyList(
            (previousTBodyList) => previousTBodyList.filter((currentObject) => (
              Number(currentObject[currentColumnValue]) < Number(currentNumberValue)
            )),
          );
        }

        if (currentArithmeticLogic === 'igual a') {
          setTBodyList(
            (previousTBodyList) => previousTBodyList.filter((currentObject) => (
              Number(currentObject[currentColumnValue]) === Number(currentNumberValue)
            )),
          );
        }
      });
    }
  }, [filtersArray]);

  const contextValue = {
    isFetching,
    data,
    searchBarValue,
    setSearchBarValue,
    tBodyList,
    setTBodyList,
    setColumnValue,
    columnValue,
    setArithmeticLogic,
    arithmeticLogic,
    setNumberValue,
    numberValue,
    setHeaders,
    headers,
    columnArray,
    setColumnArray,
    filtersArray,
    setFiltersArray,
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
