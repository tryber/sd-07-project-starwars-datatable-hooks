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
      const url = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const address = await url.json();
      /* setData recebe a chamada assincrona da url.json */
      setData(address.results);
      setResponse(address.results);
    };
    StarWarsAPI();
  }, []);

  useEffect(() => {
    let auxData = data;
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
    setResponse(auxData);
  }, [filters.filterByNumericValues]);

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
