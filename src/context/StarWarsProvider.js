import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function StarWarsProvider({ children }) {
  /* montando um estado usando data como pede o requisito */
  const [data, setData] = useState([]);
  /* const [filterName, setName] = useState(''); */
  const [response, setResponse] = useState([]);
  const [filters, setFilters] = useState(
    {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [],
      order: {
        column: 'Name',
        sort: 'ASC',
      },
    },
  );

  useEffect(() => {
    /* fazendo a requisição na API, setData recebe o objeto results e o colocar no "setState" setData do meu novo estado */
    const StarWarsAPI = async () => {
      let address = [];
      //const menosum = -1;
      const url = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      address = await url.json();
      //address.results.sort((a, b) => ((a.name > b.name) ? 1 : menosum));
      /* setData recebe a chamada assincrona da url.json */
      setData(address.results);
      setResponse(address.results);
    };
    StarWarsAPI();
  }, []);

  useEffect(() => {
    let auxData = data;
    const menosum = -1;
    const magicNumber = 0;
    for (let i = magicNumber; i < filters.filterByNumericValues.length; i += 1) {
      const { column, comparison, value } = filters.filterByNumericValues[i];

      switch (comparison) {
      case 'maior que':
        auxData = (auxData.filter((e) => Number(e[column]) > Number(value)));
        break;
      case 'menor que':
        auxData = (auxData.filter((e) => Number(e[column]) < Number(value)));
        break;
      case 'igual a':
        auxData = (auxData.filter((e) => Number(e[column]) === Number(value)));
        break;
      default:
        break;
      }
    }

    const { column: oldColumn, sort } = filters.order;
    const column = oldColumn.toLowerCase();
    let temp = data;
    switch (sort) {
    case 'ASC':
      if (column === 'name') {
        temp = temp.sort((a, b) => (
          (a[column] > b[column]) ? 1 : menosum));
      } else {
        temp = temp.sort((a, b) => (
          (Number(a[column]) > Number(b[column])) ? 1 : menosum));
      }
      break;
    case 'DESC':
      if (column === 'name') {
        temp = temp.sort((a, b) => (
          (a[column] > b[column]) ? 1 : menosum)).reverse();
      } else {
        temp = temp.sort((a, b) => (
          (Number(a[column]) > Number(b[column])) ? 1 : menosum)).reverse();
      }
      break;
    default:
      temp = temp.sort((a, b) => ((a.name > b.name) ? 1 : menosum));
      break;
    }
    console.log(temp);

    /* const { column: column2, sort } = filters.order;
    const column = column2.toLocaleLowerCase();
    console.log('esse mardito', column);
    console.log('esse mardito', sort);
    switch (sort) {
    case 'ASC':
      if (column === 'name') {
        console.log('entrouEmASC');
        auxData = auxData.sort((a, b) => ((a[column] > b[column]) ? 1 : menosum));
      } else {
        console.log('!entrouEmASC');
        auxData = auxData.sort((a, b) => (
          (Number(a[column]) > Number(b[column])) ? 1 : menosum));
      }

      break;
    case 'DESC':
      if (column === 'name') {
        console.log('entrouEmDESC');
        auxData = auxData.sort((a, b) => (
          (a[column] > b[column]) ? 1 : menosum)).reverse();
      } else {
        console.log('!entrouEmDESC');
        auxData = auxData.sort((a, b) => (
          (Number(a[column]) > Number(b[column])) ? 1 : menosum)).reverse();
      }

      break;

    default:
      console.log('entrouEmDefault');
      auxData = auxData.sort((a, b) => ((a.name > b.name) ? 1 : menosum));
      break;
    } */
    setResponse([...auxData]);
  }, [filters.filterByNumericValues, filters.order]);

  return (
    /* utilizando o o context para encapsular tudo no provider */
    <MyContext.Provider
      value={ {
        data,
        filters,
        setFilters,
        response,
      } }
    >
      { children }
    </MyContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
