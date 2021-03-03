import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const [apiData, setApiData] = useState(undefined);
  const [resquestData, setRequestData] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [selectedColumn, setSelectedColumn] = useState('population');
  const [comparasionFilter, setComparasionFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState('');
  const empty = 0;
  function searchByName({ target }) {
    const name = target.value;
    setNameFilter(name);
    const filterByName = [...apiData].filter((item) => item.name.includes(name));
    console.log(filterByName);
    if (name.length !== empty) {
      setApiData(filterByName);
    } else {
      setApiData(resquestData);
    }
  }

  function handleSelectedColumn({ target }) {
    const { value } = target;
    setSelectedColumn(value);
  }

  function handleComparisonFilter({ target }) {
    const { value } = target;
    setComparasionFilter(value);
  }

  function handleValueFilter({ target }) {
    const { value } = target;
    setValueFilter(value);
  }

  function filterByNumericValues() {
    const number = Number(valueFilter);
    const filterData = [...resquestData].filter((planet) => {
      if (comparasionFilter === 'maior que') {
        // eslint-disable-next-line dot-notation
        return Number(planet[selectedColumn]) > number;
      } if (comparasionFilter === 'menor que') {
        return Number(planet[selectedColumn]) < number;
      } if (comparasionFilter === 'igual a') {
        return Number(planet[selectedColumn]) === number;
      }
      return true;
    });
    setApiData(filterData);
  }

  useEffect(() => {
    async function FetchApi() {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await response.json();
      setApiData(data.results);
      setRequestData([...data.results]);
    }
    FetchApi();
  }, []);

  const contextValue = {
    name: 'Iniciando o projeto com tudo!',
    apiData,
    searchByName,
    nameFilter,
    selectedColumn,
    handleSelectedColumn,
    comparasionFilter,
    handleComparisonFilter,
    valueFilter,
    handleValueFilter,
    filterByNumericValues,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      { children }
    </StarWarsContext.Provider>
  );
};

export default StarWarsProvider;

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
