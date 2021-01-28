import React, { useEffect, useState } from 'react';
import useData from '../hooks/useData';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [data, setDataUrl] = useData();
  const [dataApi, setDataApi] = useState('Loading');
  const [filter, setFilter] = useState({filters: { filterByName: { name: '' } }});

  useEffect(() => {
    setDataUrl('https://swapi-trybe.herokuapp.com/api/planets/');
    if(data !== 'Loading') {
      setDataApi(data)
      setDataApi({results: data.results.filter(({ name }) => name.toLowerCase().includes(filter.filters.filterByName.name.toLowerCase()))})
    }
  }, [filter, data]);
  const contextValue = {
    filter,
    setFilter,
    dataApi,
  };
  return (
    <main>
      <StarWarsContext.Provider value={ contextValue }>
        {children}
      </StarWarsContext.Provider>
    </main>
  );
}

export default Provider;
