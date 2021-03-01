import React, { useEffect, useState } from 'react';
import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const [apiData, setApiData] = useState(undefined);

  useEffect(() => {
    async function FetchApi() {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await response.json();
      setApiData(data);
    }
    FetchApi();
  }, []);

  const contextValue = {
    name: 'Iniciando o projeto com tudo!',
    apiData,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      { children }
    </StarWarsContext.Provider>
  );
};

export default StarWarsProvider;
