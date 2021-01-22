import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import StarWarsContext from './StarWarsContext';
import RequestApi from '../services/RequestApi';

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState();
  const [filters, setFilter] = useState();
  const [newData, setNewData] = useState();
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const zero = 0;
  const [number, setNumber] = useState(zero);
  const [objectFinal, setObjectFinal] = useState({ column: '' });

  function filterChar({ target: { value } }) {
    const name = data.filter((item) => item.name
      .toLowerCase()
      .includes(value.toLowerCase()));
    if (data.includes(name)) return name;
    setFilter({ ...filters, filterByName: { name } });
  }

  function changeColumn({ target: { value } }) {
    setColumn(value);
  }
  function changeComparison({ target: { value } }) {
    setComparison(value);
  }
  function changeNumber({ target: { value } }) {
    setNumber(value);
  }

  function onClickFilterBtn() {
    console.log(column, comparison, number);
    setObjectFinal({
      column,
      comparison,
      number,
    });
  }
  useEffect(() => {
    if (objectFinal && objectFinal.comparison === 'maior que') {
      const endData = data.filter(
        (pulation) => Number(pulation[objectFinal.column])
        > Number(objectFinal.number),
      );
      setNewData(endData);
    }
    if (objectFinal && objectFinal.comparison === 'menor que') {
      const endData = data.filter(
        (pulation) => Number(pulation[objectFinal.column])
        < Number(objectFinal.number),
      );
      setNewData(endData);
    }
    if (objectFinal && objectFinal.comparison === 'igual a') {
      const endData = data.filter(
        (pulation) => Number(pulation[objectFinal.column])
        === Number(objectFinal.number),
      );
      setNewData(endData);
    }
  }, [data, objectFinal]);
  // Esse useEffect é para renderizar o didmount:
  useEffect(() => {
    async function returnApi() {
      const { results } = await RequestApi();
      setData(results);
    }
    returnApi();
  }, []);
  // Esse useEffect é para mostrar a table de acordo com a pesquisa:
  useEffect(() => {
    if (filters) setNewData(filters.filterByName.name);
    else setNewData(data);
  }, [data, filters]);

  const context = {
    data,
    filters,
    setData,
    filterChar,
    onClickFilterBtn,
    newData,
    changeColumn,
    changeNumber,
    changeComparison,
    column,
    number,
    comparison,
    objectFinal,
  };
  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.shape(PropTypes.object).isRequired,
};

export default StarWarsProvider;
