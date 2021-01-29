import React, { useEffect, useState } from 'react';
import useData from '../hooks/useData';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [data, setDataUrl, setData] = useData();
  const [dataApi, setDataApi] = useState('Loading');
  const [filter, setFilter] = useState(
    { filters: { filterByName: { name: '' }, filterByNumericValues: [{}] } },
  );
  const [selectCount, setSelectCount] = useState(1);

  useEffect(() => {
    setDataUrl('https://swapi-trybe.herokuapp.com/api/planets/');
  });

  useEffect(() => {
    if (data !== 'Loading') {
      setDataApi({ results: data.results.filter(({ name }) => name
        .toLowerCase()
        .includes(filter.filters.filterByName.name.toLowerCase())) });
    }
  }, [filter, data, setData]);

  const contextValue = {
    filter,
    setFilter,
    dataApi,
    setData,
    data,
    selectCount,
    setSelectCount,
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
