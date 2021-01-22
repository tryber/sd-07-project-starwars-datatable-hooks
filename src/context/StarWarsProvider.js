import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import RequestAPI from '../services/RequestApi';

const StarWarsProvider = ({ children }) => {
  // Estado inicial
  const [data, setData] = useState();
  const [filters, setFilter] = useState();
  const [novo, setNovo] = useState();
  const [column, setColumn] = useState([]);
  const [comparison, setComparison] = useState('maior que');
  const mil = 1000;
  const [number, setNumber] = useState(mil);
  const [objectComplete, setobjectComplete] = useState({ column: '' });

  // fitra somente o nome de acordo com o value
  function filterByName({ target: { value } }) {
    const name = data.filter((item) => item.name.includes(value));
    setFilter({ filterByName: { name } });
  }

  // useEffect para requisição da api e preencher a tabela
  useEffect(() => {
    async function callApi() {
      const { results } = await RequestAPI();
      setData(results);
    }
    callApi();
  }, []);

  // useEffect para filtrar somente por nome e atualizar
  // a tabela a cada nova procura
  useEffect(() => {
    if (filters) setNovo(filters.filterByName.name);
    else setNovo(data);
  }, [data, filters]);

  // função para pegar o value das colunas
  const changeColumn = ({ target: { value } }) => {
    console.log('Column:', value);
    setColumn(value);
  };

  // função para pegar o value do Comparison
  const changeComparison = ({ target: { value } }) => {
    console.log('Comparison:', value);
    setComparison(value);
  };

  // função para pegar o value do Comparison
  const changeNumber = ({ target: { value } }) => {
    console.log('Number:', value);
    setNumber(Number(value));
  };

  const Filtered = () => {
    setobjectComplete(
      {
        column,
        comparison,
        number,
      },
    );
  };

  // useEffect para atualizar os filtros dos inputs
  useEffect(() => {
    if (objectComplete && objectComplete.comparison === 'maior que') {
      const newData = data.filter(
        (item) => Number(item[objectComplete.column])
        > (objectComplete.number),
      );
      console.log('maior que', newData);
      setNovo(newData);
    }
    if (objectComplete && objectComplete.comparison === 'menor que') {
      const newData = data.filter(
        (item) => Number(item[objectComplete.column])
        < (objectComplete.number),
      );
      console.log('menor que', newData);
      setNovo(newData);
    }
    if (objectComplete && objectComplete.comparison === 'igual a') {
      const newData = data.filter(
        (item) => Number(item[objectComplete.column])
        === (objectComplete.number),
      );
      setNovo(newData);
    }
  }, [objectComplete, data]);

  const context = {
    data,
    column,
    comparison,
    number,
    filterByName,
    novo,
    changeColumn,
    changeComparison,
    changeNumber,
    Filtered,
    objectComplete,
  };
  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
export default StarWarsProvider;
