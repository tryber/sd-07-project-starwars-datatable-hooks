import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import requestApi from '../services/RequestApi';

const StarWarsProvide = ({ children }) => {
  const [data, setData] = useState();
  const [line, setLine] = useState([]);
  const [filters, setFilters] = useState({});
  const [newRender, setNewRender] = useState(false);
  const [comparaNumeros, setComparaNumeros] = useState();
  const [inputNumber, setInputNumber] = useState();
  const [chooseColumn, setChooseColumn] = useState();
  const [collumnOptions, setCollumnOptions] = useState([]);

  const renderLines = (results) => {
    const temp = [];
    const indexOfResidents = 9;
    results.map((planeta) => temp.push(Object.values(planeta)));
    temp.forEach((linha) => linha.splice(indexOfResidents, 1));
    setLine(temp);
  };

  useEffect(() => {
    const collumnOptionsTemp = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];

    async function getApi() {
      const results = await requestApi();
      await setData(results);
      await renderLines(results);
    }
    getApi();
    setCollumnOptions(collumnOptionsTemp);
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

  const submitFilters = () => {
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
  };

  const context = {
    data,
    line,
    filters,
    newRender,
    collumnOptions,
    requestApi,
    filterNameInput,
    setComparaNumeros,
    setChooseColumn,
    setInputNumber,
    submitFilters,
    setCollumnOptions,
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
