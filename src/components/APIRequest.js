import React, { useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function apiRequest({ children }) {
  const [apiResults, setApiResults] = useState([]);

  const fetchApi = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const data = await response.json();
    setApiResults(data.results);
  }

  useEffect(() => {
    fetchApi();
  }, []);

  const data = {
    apiResults,
  }

  return (
    <StarWarsContext.Provider value={data}>
      {children}
    </StarWarsContext.Provider>
  )
}

export { apiRequest as Provider };
