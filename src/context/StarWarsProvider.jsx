import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import requestApi from '../services/RequestApi';

const StarWarsProvide = ({ children }) => {
  // const [valor, setValor] = useState('valor inicial');
  const [data, setData] = useState();
  const [line, setLine] = useState([]);
  const [filters, setFilters] = useState({});
  const [newRender, setNewRender] = useState(false);
  const [comparaNumeros, setComparaNumeros] = useState();
  const [inputNumber, setInputNumber] = useState();
  const [chooseColumn, setChooseColumn] = useState();
  // const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  const renderLines = (results) => {
    const temp = [];
    const indexOfResidents = 9;
    results.map((planeta) => temp.push(Object.values(planeta)));
    // console.log(temp);
    temp.forEach((linha) => linha.splice(indexOfResidents, 1));
    // console.log(temp);
    setLine(temp);
  };

  useEffect(() => {
    async function getApi() {
      const results = await requestApi();
      await setData(results);
      await renderLines(results);
      // await console.log(results);
    }
    getApi();
  }, []);

  const filterNameInput = ({ target }) => {
    const { value } = target;
    const input = data.filter((item) => item.name.includes(value));
    setNewRender(true);
    setFilters({ filterByName: { input } });
  };

  const resetInputs = () => {
    const reset = 0;
    setComparaNumeros();
    setInputNumber(reset);
    setChooseColumn(reset);
    setFilters({});
  };

  const testPorEnquanto = () => {
    const { filterByName } = filters;

    console.log(comparaNumeros);
    console.log(inputNumber);
    console.log(chooseColumn);
    console.log(filterByName);
    console.log(filters);
    console.log(line);

    if (comparaNumeros === 'maior que') {
      setLine(line.filter((item) => item[chooseColumn] > parseInt(inputNumber, 10)));
      resetInputs();
    }

    if (comparaNumeros === 'menor que') {
      setLine(line.filter((item) => item[chooseColumn] <= inputNumber));
      resetInputs();
    }

    if (comparaNumeros === 'igual a') {
      setLine(line.filter((item) => item[chooseColumn] === inputNumber));
      resetInputs();
    }

    // const currFilter = {
    //   column: 'population',
    //   comparison: 'maior que',
    //   value: '100000',
    // }
    // const array = []
    // array.push(currFilter)
    // setFilterByNumericValues(array)
    // setFilters(...filterByNumericValues)
  };

  const context = {
    // valor a ser utilizado,
    data,
    line,
    filters,
    newRender,
    requestApi,
    filterNameInput,
    setComparaNumeros,
    setChooseColumn,
    setInputNumber,
    testPorEnquanto,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsProvide.propTypes = {
  children: PropTypes.element.isRequired,
};

export default StarWarsProvide;
