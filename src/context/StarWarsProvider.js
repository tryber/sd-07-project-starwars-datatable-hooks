import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function StarWarsProvider({ children }) {
  /* montando um estado usando data como pede o requisito */
  const [data, setData] = useState([]);
  const [filterName, setName] = useState('');
  const [response, setResponse] = useState([]);

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
    /* Aplicando um filtro nos nomes dos planetas com toLowerCase */
    const input = data.filter(({ name }) => name.toLowerCase().includes(filterName));
    setResponse(input);
  }, [data, filterName]);

  return (
    <MyContext.Provider
      value={ {
        data,
        filterName,
        setName,
        response,
        setResponse,
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
