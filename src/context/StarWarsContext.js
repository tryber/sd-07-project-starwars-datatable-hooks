import React, { createContext, useEffect, useState } from 'react';

const StarWarsContext = createContext();
const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState({ filterByName: { name: '' },
    filterByNumericValues: [] });

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((json) => setData(json.results));
  }, []);

  const context = {
    data,
    setSearch,
    setFilter,
    filter,
    search,
    // filterByName,
  };

  useEffect(() => {
    setFilter({ ...filter, filterByNumericValues: filter });
  }, [filter]);

  useEffect(() => {
    setFilter({ ...filter, filterByName: { name: search } });
  }, [filter, search]);

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
};

export { StarWarsContext, StarWarsProvider as Provider };
