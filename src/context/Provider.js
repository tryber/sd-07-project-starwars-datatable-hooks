import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const [apiData, setApiData] = useState(undefined);
  const [resquestData, setRequestData] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
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
